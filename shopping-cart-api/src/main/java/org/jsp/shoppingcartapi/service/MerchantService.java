package org.jsp.shoppingcartapi.service;

import java.util.HashMap;
import java.util.LinkedHashMap;

import org.jsp.shoppingcartapi.dao.MerchantDao;
import org.jsp.shoppingcartapi.dto.EmailConfiguration;
import org.jsp.shoppingcartapi.dto.Merchant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MerchantService {
	@Autowired
	private MerchantDao dao;
	@Autowired
	EmailConfiguration configuration;
	@Autowired
	ShoppingCartEmailService emailService;

	public Merchant saveMerchant(Merchant merchant) {
		HashMap<String, String> map = new LinkedHashMap<>();
		map.put("email", merchant.getEmail());
		configuration.setSubject("Welcome On Board");
		configuration.setUser(map);
		String msg = emailService.sendWelcomeEmail(configuration);
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@" + msg);
		return dao.saveMerchant(merchant);
	}
}
