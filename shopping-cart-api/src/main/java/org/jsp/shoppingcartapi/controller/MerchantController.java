package org.jsp.shoppingcartapi.controller;

import org.jsp.shoppingcartapi.dto.Merchant;
import org.jsp.shoppingcartapi.service.MerchantService;
import org.jsp.shoppingcartapi.service.ResetPasswordLinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin("http://localhost:3000/")
public class MerchantController {
	@Autowired
	private MerchantService service;
	@Autowired
	private ResetPasswordLinkService linkService;

	@PostMapping("/merchants")
	public Merchant saveMerchant(@RequestBody Merchant merchant, HttpServletRequest request) {
		System.out.println(linkService.getResetPasswordLink(request));
		System.out.println(linkService.getVerifyUserLink(request));
		return service.saveMerchant(merchant);
	}
}
