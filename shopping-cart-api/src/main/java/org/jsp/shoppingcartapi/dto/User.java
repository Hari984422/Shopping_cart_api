package org.jsp.shoppingcartapi.dto;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	@Column(unique = true, nullable = false)
	private long phone;
	@Column(unique = true, nullable = false)
	private String email;
	private String password;
	private String token;
	private String status;
	@OneToMany
	@JoinTable(name = "user_cart", joinColumns = @JoinColumn(name = "user_id"),
	inverseJoinColumns = @JoinColumn(name = "product_id"))
	private List<Product> cart;
	@OneToMany
	@JoinTable(name = "user_wishList", joinColumns = @JoinColumn(name = "user_id"), 
	inverseJoinColumns = @JoinColumn(name = "product_id"))
	private List<Product> wishList;
}
