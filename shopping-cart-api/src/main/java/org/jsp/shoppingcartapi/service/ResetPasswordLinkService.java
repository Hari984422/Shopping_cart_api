package org.jsp.shoppingcartapi.service;

import static org.jsp.shoppingcartapi.util.ApplicationConstants.RESET_URL;
import static org.jsp.shoppingcartapi.util.ApplicationConstants.VERIFY_URL;

import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;
import net.bytebuddy.utility.RandomString;

@Service
public class ResetPasswordLinkService {
	public String getResetPasswordLink(HttpServletRequest request) {
		String token = RandomString.make(45);
		String siteurl = request.getRequestURL().toString();
		String url = siteurl.replace(request.getServletPath(), "");
		return url + RESET_URL + token;
	}

	public String getVerifyUserLink(HttpServletRequest request) {
		String token = RandomString.make(45);
		String siteurl = request.getRequestURL().toString();
		String url = siteurl.replace(request.getServletPath(), "");
		return url + VERIFY_URL + token;
	}
}
