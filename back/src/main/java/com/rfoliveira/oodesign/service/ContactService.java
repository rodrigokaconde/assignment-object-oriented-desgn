package com.rfoliveira.oodesign.service;

import com.rfoliveira.oodesign.model.Contact;
import com.rfoliveira.oodesign.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {
    @Autowired
    private ContactRepository contactRepository;

    public List<Contact> findAll(){
        return contactRepository.findAll();
    }

    public Contact saveContact(Contact contact){
        return contactRepository.save(contact);
    }

    public Contact editContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public void delContact(String id){
        contactRepository.deleteById(id);
    }

    public Contact getContactById(String id) {
        Optional<Contact> opContact = contactRepository.findById(id);
        Contact contact;
        if (opContact.isPresent())
            return opContact.get();
        else
            return null;
    }
}
