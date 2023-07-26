package org.jsp.shoppingcartapi.repository;

import org.jsp.shoppingcartapi.dto.Merchant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MerchantRepository extends JpaRepository<Merchant, Integer> {
	@Query("select m from Merchant m where m.token=?1")
	public Merchant findMerchantByToken(String token);

	@Query("select m from Merchant m where m.email=?1")
	public Merchant findMerchantByEmail(String email);
}
