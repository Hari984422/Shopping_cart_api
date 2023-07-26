package org.jsp.shoppingcartapi.service;

import org.jsp.shoppingcartapi.dto.EmailConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class ShoppingCartEmailService {
	@Autowired
	private JavaMailSender mailSender;

	public String sendWelcomeEmail(EmailConfiguration configuration) {
		if (configuration.getUser().get("email") != null) {
			try {
				MimeMessage message = mailSender.createMimeMessage();
				MimeMessageHelper helper = new MimeMessageHelper(message);
				helper.setTo(configuration.getUser().get("email"));
				helper.setSubject(configuration.getSubject());
				helper.setText(configuration.getText());
				mailSender.send(message);
				return "mail sent";

			} catch (MailException | MessagingException e) {
				e.printStackTrace();
				return "if unable to send email";
			}
		} else {
			return "else unable to send email";
		}

	}
}
