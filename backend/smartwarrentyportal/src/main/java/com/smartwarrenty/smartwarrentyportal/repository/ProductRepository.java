package com.smartwarrenty.smartwarrentyportal.repository;

import com.smartwarrenty.smartwarrentyportal.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}