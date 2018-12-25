import { observable, action } from 'mobx';
import axios from 'axios';

const BASEURL = 'http://sample.bmaster.kro.kr';

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
            .then((response)=> {
                this.contacts = response.data;
                this.isLoading = false;
            })
            .catch((error)=> {
                this.isLoading = false;
            })
        }
    }   

    @action addContact = (name, tel, address) => {
        this.name = name;
        this.isLoading = true;
        axios.post(BASEURL + '/contacts', { name:name, tel:tel, address:address })
        .then((response)=> {
            if (response.data.status === 'success') {
                this.isLoading = false;
                this.searchContact();
            } else {
                this.isLoading = false;
                console.log("추가 실패!!");
            }
        })
        .catch((error)=> {
            this.isLoading = false;
            console.log(error);
        })
    }

    @action deleteContact = (no) => {
        axios.delete(BASEURL+'/contacts/'+no)
        .then((response)=> {
            if (response.data.status === 'success') {
                this.isLoading = false;
                this.searchContact();
            } else {
                this.isLoading = false;
                console.log("삭제 실패!!");
            }
        })
        .catch((error)=> {
            this.isLoading = false;
            console.log(error);
        })
    }
}

export default ContactStore;