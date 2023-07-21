package org.jsp.shoppingcartapi.service;

import org.jsp.shoppingcartapi.dao.MerchantDao;
import org.jsp.shoppingcartapi.dto.Merchant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MerchantService {
	@Autowired
	private MerchantDao dao;

	public Merchant saveMerchant(Merchant merchant) {
		return dao.saveMerchant(merchant);
	}
}
