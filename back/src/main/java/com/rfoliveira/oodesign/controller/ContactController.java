package com.rfoliveira.oodesign.controller;

import com.rfoliveira.oodesign.model.Contact;
import com.rfoliveira.oodesign.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/contact")
public class ContactController {
    @Autowired
    private ContactService contactService;

    @GetMapping
    public List<Contact> getAll(){
        return contactService.findAll();
    }

    @GetMapping("{id}")
    public Contact getUser(@PathVariable String id) {
        return contactService.getContactById(id);
    }

    @PostMapping
    public Contact saveContact(@RequestBody Contact contact){
        return contactService.saveContact(contact);
    }

    @PutMapping
    public Contact editContact(@RequestBody Contact contact){
        return contactService.editContact(contact);
    }

    @DeleteMapping("{id}")
    public void delContact(@PathVariable("id") String id){
        contactService.delContact(id);
    }
}
