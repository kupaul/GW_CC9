package exv.twilio.common

class TwilioSystemPayload {

  function createdSMSPayload(sms : TwilioSMS) : String {
    var toNumber = sms.ToNumber
    var fromNumber = sms.FromNumber
    var messageBody = sms.MessageBody
    return "Body="+ messageBody + "&To="+ toNumber + "&From=" + fromNumber
  }
}