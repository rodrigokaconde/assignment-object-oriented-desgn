package com.rfoliveira.oodesign.repository;

import com.rfoliveira.oodesign.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, String> {
}
