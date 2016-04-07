/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.2.201
 *  @website http://formvalidator.net/
 *  @author Omid Bordbar,
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(a,b){"use strict";a(b).bind("validatorsLoaded",function(){a.formUtils.LANG={errorTitle:"امکان ارسال فرم وجود ندارد!",requiredField:"پر کردن این فیلد الزامی است.",requiredFields:"به همه فیلدهایی که الزامی است پاسخ داده نشده",badTime:"زمانی را که وارد کرده اید اشتباه است",badEmail:"ایمیلی را که وارد کرده اید اشتباه است",badTelephone:"شماره تلفنی را که وارد کرده اید اشتباه است",badSecurityAnswer:"پاسخ شما به پرسش امنیتی اشتباه است",badDate:"تاریخ وارد شده اشتباه است",lengthBadStart:"پاسخ شما می بایست بین ",lengthBadEnd:" کاراکتر باشد",lengthTooLongStart:"پاسخ شما می بایست کمتر از ",lengthTooShortStart:"پاسخ شما می بایست بیشتر از ",notConfirmed:"مقادیر وارد شده نمی توان تایید کرد",badDomain:"دامین وارد شده اشتباه می باشد",badUrl:"آدرس وارد شده اشتباه می باشد",badCustomVal:"مقادیر وارد شده معتبر نمی باشد",andSpaces:" و فاصله ",badInt:"مقدار وارد شده یک شماره معتبر نمی باشد",badSecurityNumber:"شماره ملی وارد شده اشتباه می باشد",badUKVatAnswer:"شماره مالیاتی وارد شده معتبر نمی باشد",badStrength:"گذرواژه وارد شده به اندازه کافی امن نیست",badNumberOfSelectedOptionsStart:"شما باید حداقل",badNumberOfSelectedOptionsEnd:" پاسخ را انتخاب کنید",badAlphaNumeric:"مقدار وارد شده تنها باید شامل اعداد و حروف باشد",badAlphaNumericExtra:" و",wrongFileSize:"فایلی را که می خواهید آپلود کنید حجم زیادی دارد (حداکثر %s)",wrongFileType:"فقط فایل های با پسوند %s قابل پذیرش می باشند",groupCheckedRangeStart:"لطفا ",groupCheckedTooFewStart:"لطفا حداقل ",groupCheckedTooManyStart:"لطفا حداکثر ",groupCheckedEnd:" مورد را انتخاب نمایید",badCreditCard:"شماره کارت اعتباری وارد شده اشتباه می باشد",badCVV:"شماره CVV وارد شده اشتباه می باشد",wrongFileDim:"ابعاد تصویر وارد شده معتبر نمی باشد،",imageTooTall:"ارتفاع تصویر وارد شده نمی توان بیشتر باشد از",imageTooWide:"عرض تصویر وارد شده نمی توان بیشتر باشد از",imageTooSmall:"تصویر وارد شده کوچک می باشد",min:"حداقل",max:"حداکثر",imageRatioNotAccepted:"نسبت تصویر(عرض در ارتفاع) نامعتبر می باشد"}})}(a,window)});
