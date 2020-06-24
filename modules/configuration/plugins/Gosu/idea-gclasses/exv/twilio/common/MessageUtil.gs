package exv.twilio.common

class MessageUtil {

  function createNotificationMessage(claim : Claim) : TwilioSMS{
     var claimContact = claim.Contacts.firstWhere(\cContact -> cContact.Roles.hasMatch(\role -> role.Role == ContactRole.TC_INSURED))
      var twilioSMS = new TwilioSMS()
      twilioSMS.ToNumber = claimContact.Contact.PrimaryPhoneValue
      twilioSMS.FromNumber = claim.AssignedUser.Contact.PrimaryPhoneValue
      twilioSMS.TypeOfMsg = TwilioSMSType.TC_NOTIFICATION
      twilioSMS.ClaimContactID = claimContact
      claimContact.addToMessages(twilioSMS)
      return twilioSMS
  }
}