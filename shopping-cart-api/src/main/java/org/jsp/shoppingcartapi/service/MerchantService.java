package org.jsp.shoppingcartapi.service;

import java.util.HashMap;
import java.util.LinkedHashMap;

import org.jsp.shoppingcartapi.dao.MerchantDao;
import org.jsp.shoppingcartapi.dto.EmailConfiguration;
import org.jsp.shoppingcartapi.dto.Merchant;
import org.jsp.shoppingcartapi.util.MerchantStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;

@Service
public class MerchantService {
	@Autowired
	private MerchantDao dao;
	@Autowired
	EmailConfiguration configuration;
	@Autowired
	ShoppingCartEmailService emailService;
	@Autowired
	private GenerateLinkService linkService;

	public Merchant saveMerchant(Merchant merchant, HttpServletRequest request) {
		HashMap<String, String> map = new LinkedHashMap<>();
		map.put("email", merchant.getEmail());
		configuration.setSubject("Welcome On Board");
		configuration.setUser(map);
		configuration.setText("Hello Mr." + merchant.getName()
				+ " You have succesfully registered for Our E-commerce Application. Click on the following link to activate Your Account "
				+ linkService.getVerificationLink(request, merchant));
		emailService.sendWelcomeEmail(configuration);
		return dao.saveMerchant(merchant);
	}

	public String verifyMerchant(String token) {
		Merchant merchant = dao.verifyMerchant(token);
		if (merchant != null) {
			merchant.setStatus(MerchantStatus.ACTIVE.toString());
			merchant.setToken(null);
			dao.updateMerchant(merchant);
			return "Merchant Verified and Account Activated";
		}
		return "cannot verify merchant as token is Invalid";
	}

	public String sendResetPasswordLink(String email) {

	}
}
