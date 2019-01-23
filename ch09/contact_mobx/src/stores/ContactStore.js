import { configure, observable, action } from 'mobx';
import axios from 'axios';

const BASEURL = '/api';

configure({ enforceActions: "observed" })

class ContactStore {
    @observable contacts = [];
    @observable isLoading = false;
    @observable name = '';

    @action changeIsLoading = (isShow)=> {
        this.isLoading = isShow;
    }

    @action changeName = (name) => {
        this.name = name;
    }

    @action searchContact = ()=> {
        if (this.name.length >= 2) {
            this.isLoading = true;
            this.contacts = [];
            axios.get(BASEURL + '/contacts_long/search/' + this.name)
            .then(
                action("fetchSuccess", (response)=> {
                    this.contacts = response.data;
                    this.isLoading = false;
                })
            )
            .catch(
                action("fetchError", (error)=> {
                    this.isLoading = false;
                })
            )
        }
    }   

    @action addContact = (name, tel, address) => {
        this.name = name;
        this.isLoading = true;
        axios.post(BASEURL + '/contacts', { name:name, tel:tel, address:address })
        .then(this.transProcess, this.transError);
    }

    @action deleteContact = (no) => {
        this.isLoading = true;
        axios.delete(BASEURL+'/contacts/'+no)
        .then(this.transProcess, this.transError);
    }

    @action.bound
    transProcess(response) {
        if (response.data.status === 'success') {
            this.isLoading = false;
            this.searchContact();
        } else {
            this.isLoading = false;
            console.log("삭제 실패!!");
        }
    }

    @action.bound
    transError(error) {
        this.isLoading = false;
        console.log(error);
    }
}

export default ContactStore;