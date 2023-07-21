package org.jsp.shoppingcartapi.repository;

import org.jsp.shoppingcartapi.dto.Merchant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MerchantRepository extends JpaRepository<Merchant, Integer> {

}
