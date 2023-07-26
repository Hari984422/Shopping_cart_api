package org.jsp.shoppingcartapi.service;

import static org.jsp.shoppingcartapi.util.ApplicationConstants.RESET_URL;
import static org.jsp.shoppingcartapi.util.ApplicationConstants.SIZE;
import static org.jsp.shoppingcartapi.util.ApplicationConstants.VERIFY_URL;

import org.jsp.shoppingcartapi.dao.MerchantDao;
import org.jsp.shoppingcartapi.dto.Merchant;
import org.jsp.shoppingcartapi.util.MerchantStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;
import net.bytebuddy.utility.RandomString;

@Service
public class GenerateLinkService {
	@Autowired
	private MerchantDao dao;

	public String getResetPasswordLink(HttpServletRequest request) {
		String token = RandomString.make(SIZE);
		String siteurl = request.getRequestURL().toString();
		String url = siteurl.replace(request.getServletPath(), "");
		return url + RESET_URL + token;
	}

	public String getVerificationLink(HttpServletRequest request, Merchant merchant) {
		String token = RandomString.make(SIZE);
		merchant.setToken(token);
		merchant.setStatus(MerchantStatus.IN_ACTIVE.toString());
		dao.updateMerchant(merchant);
		String siteurl = request.getRequestURL().toString();
		String url = siteurl.replace(request.getServletPath(), "");
		return url + VERIFY_URL + token;
	}
}
