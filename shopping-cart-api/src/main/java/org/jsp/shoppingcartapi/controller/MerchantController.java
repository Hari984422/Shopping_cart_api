package org.jsp.shoppingcartapi.controller;

import org.jsp.shoppingcartapi.dto.Merchant;
import org.jsp.shoppingcartapi.service.MerchantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000/")
public class MerchantController {
	@Autowired
	private MerchantService service;

	@PostMapping("/merchants")
	public Merchant saveMerchant(@RequestBody Merchant merchant) {
		return service.saveMerchant(merchant);
	}
}
