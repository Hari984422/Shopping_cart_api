package org.jsp.shoppingcartapi.dao;

import org.jsp.shoppingcartapi.dto.Merchant;
import org.jsp.shoppingcartapi.repository.MerchantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MerchantDao {
	@Autowired
	private MerchantRepository repository;

	public Merchant saveMerchant(Merchant merchant) {
		return repository.save(merchant);
	}
}
