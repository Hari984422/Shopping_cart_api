package org.jsp.shoppingcartapi.controller;

import org.jsp.shoppingcartapi.dto.Merchant;
import org.jsp.shoppingcartapi.service.MerchantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin("http://localhost:3000/")
public class MerchantController {
	@Autowired
	private MerchantService service;

	@PostMapping("/merchants")
	public Merchant saveMerchant(@RequestBody Merchant merchant, HttpServletRequest request) {
		return service.saveMerchant(merchant, request);
	}

	@GetMapping("/merchants/verify-account")
	public String verifyMerchant(@RequestParam String token) {
		return service.verifyMerchant(token);
	}

	public String forgotPassword(@RequestParam String email) {

	}
}
