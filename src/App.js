import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faAd, faAddressBook, faAddressCard, faAdjust, faAirFreshener, faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faAllergies, faAmbulance, faAmericanSignLanguageInterpreting, faAnchor, faAngleDoubleDown, faAngleDoubleLeft, faAngleDoubleRight, faAngleDoubleUp, faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faAngry, faAnkh, faAppleAlt, faArchive, faArchway, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowAltCircleUp, faArrowCircleDown, faArrowCircleLeft, faArrowCircleRight, faArrowCircleUp, faArrowDown, faArrowLeft, faArrowRight, faArrowUp, faArrowsAlt, faArrowsAltH, faArrowsAltV, faAssistiveListeningSystems, faAsterisk, faAt, faAtlas, faAtom, faAudioDescription, faAward, faBaby, faBabyCarriage, faBackspace, faBackward, faBacon, faBacteria, faBacterium, faBahai, faBalanceScale, faBalanceScaleLeft, faBalanceScaleRight, faBan, faBandAid, faBarcode, faBars, faBaseballBall, faBasketballBall, faBath, faBatteryEmpty, faBatteryFull, faBatteryHalf, faBatteryQuarter, faBatteryThreeQuarters, faBed, faBeer, faBell, faBellSlash, faBezierCurve, faBible, faBicycle, faBiking, faBinoculars, faBiohazard, faBirthdayCake, faBlender, faBlenderPhone, faBlind, faBlog, faBold, faBolt, faBomb, faBone, faBong, faBook, faBookDead, faBookMedical, faBookOpen, faBookReader, faBookmark, faBorderAll, faBorderNone, faBorderStyle, faBowlingBall, faBox, faBoxOpen, faBoxTissue, faBoxes, faBraille, faBrain, faBreadSlice, faBriefcase, faBriefcaseMedical, faBroadcastTower, faBroom, faBrush, faBug, faBuilding, faBullhorn, faBullseye, faBurn, faBus, faBusAlt, faBusinessTime, faCalculator, faCalendar, faCalendarAlt, faCalendarCheck, faCalendarDay, faCalendarMinus, faCalendarPlus, faCalendarTimes, faCalendarWeek, faCamera, faCameraRetro, faCampground, faCandyCane, faCannabis, faCapsules, faCar, faCarAlt, faCarBattery, faCarCrash, faCarSide, faCaravan, faCaretDown, faCaretLeft, faCaretRight, faCaretSquareDown, faCaretSquareLeft, faCaretSquareRight, faCaretSquareUp, faCaretUp, faCarrot, faCartArrowDown, faCartPlus, faCashRegister, faCat, faCertificate, faChair, faChalkboard, faChalkboardTeacher, faChargingStation, faChartArea, faChartBar, faChartLine, faChartPie, faCheck, faCheckCircle, faCheckDouble, faCheckSquare, faCheese, faChess, faChessBishop, faChessBoard, faChessKing, faChessKnight, faChessPawn, faChessQueen, faChessRook, faChevronCircleDown, faChevronCircleLeft, faChevronCircleRight, faChevronCircleUp, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faChild, faChurch, faCircle, faCircleNotch, faCity, faClinicMedical, faClipboard, faClipboardCheck, faClipboardList, faClock, faClone, faClosedCaptioning, faCloud, faCloudDownloadAlt, faCloudMeatball, faCloudMoon, faCloudMoonRain, faCloudRain, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faCloudUploadAlt, faCocktail, faCode, faCodeBranch, faCoffee, faCog, faCogs, faCoins, faColumns, faComment, faCommentAlt, faCommentDollar, faCommentDots, faCommentMedical, faCommentSlash, faComments, faCommentsDollar, faCompactDisc, faCompass, faCompress, faCompressAlt, faCompressArrowsAlt, faConciergeBell, faCookie, faCookieBite, faCopy, faCopyright, faCouch, faCreditCard, faCrop, faCropAlt, faCross, faCrosshairs, faCrow, faCrown, faCrutch, faCube, faCubes, faCut, faDatabase, faDeaf, faDemocrat, faDesktop, faDharmachakra, faDiagnoses, faDice, faDiceD20, faDiceD6, faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo, faDigitalTachograph, faDirections, faDisease, faDivide, faDizzy, faDna, faDog, faDollarSign, faDolly, faDollyFlatbed, faDonate, faDoorClosed, faDoorOpen, faDotCircle, faDove, faDownload, faDraftingCompass, faDragon, faDrawPolygon, faDrum, faDrumSteelpan, faDrumstickBite, faDumbbell, faDumpster, faDumpsterFire, faDungeon, faEdit, faEgg, faEject, faEllipsisH, faEllipsisV, faEnvelope, faEnvelopeOpen, faEnvelopeOpenText, faEnvelopeSquare, faEquals, faEraser, faEthernet, faEuroSign, faExchangeAlt, faExclamation, faExclamationCircle, faExclamationTriangle, faExpand, faExpandAlt, faExpandArrowsAlt, faExternalLinkAlt, faExternalLinkSquareAlt, faEye, faEyeDropper, faEyeSlash, faFan, faFastBackward, faFastForward, faFaucet, faFax, faFeather, faFeatherAlt, faFemale, faFighterJet, faFile, faFileAlt, faFileArchive, faFileAudio, faFileCode, faFileContract, faFileCsv, faFileDownload, faFileExcel, faFileExport, faFileImage, faFileImport, faFileInvoice, faFileInvoiceDollar, faFileMedical, faFileMedicalAlt, faFilePdf, faFilePowerpoint, faFilePrescription, faFileSignature, faFileUpload, faFileVideo, faFileWord, faFill, faFillDrip, faFilm, faFilter, faFingerprint, faFire, faFireAlt, faFireExtinguisher, faFirstAid, faFish, faFistRaised, faFlag, faFlagCheckered, faFlagUsa, faFlask, faFlushed, faFolder, faFolderMinus, faFolderOpen, faFolderPlus, faFont, faFontAwesomeLogoFull, faFootballBall, faForward, faFrog, faFrown, faFrownOpen, faFunnelDollar, faFutbol, faGamepad, faGasPump, faGavel, faGem, faGenderless, faGhost, faGift, faGifts, faGlassCheers, faGlassMartini, faGlassMartiniAlt, faGlassWhiskey, faGlasses, faGlobe, faGlobeAfrica, faGlobeAmericas, faGlobeAsia, faGlobeEurope, faGolfBall, faGopuram, faGraduationCap, faGreaterThan, faGreaterThanEqual, faGrimace, faGrin, faGrinAlt, faGrinBeam, faGrinBeamSweat, faGrinHearts, faGrinSquint, faGrinSquintTears, faGrinStars, faGrinTears, faGrinTongue, faGrinTongueSquint, faGrinTongueWink, faGrinWink, faGripHorizontal, faGripLines, faGripLinesVertical, faGripVertical, faGuitar, faHSquare, faHamburger, faHammer, faHamsa, faHandHolding, faHandHoldingHeart, faHandHoldingMedical, faHandHoldingUsd, faHandHoldingWater, faHandLizard, faHandMiddleFinger, faHandPaper, faHandPeace, faHandPointDown, faHandPointLeft, faHandPointRight, faHandPointUp, faHandPointer, faHandRock, faHandScissors, faHandSparkles, faHandSpock, faHands, faHandsHelping, faHandsWash, faHandshake, faHandshakeAltSlash, faHandshakeSlash, faHanukiah, faHardHat, faHashtag, faHatCowboy, faHatCowboySide, faHatWizard, faHdd, faHeadSideCough, faHeadSideCoughSlash, faHeadSideMask, faHeadSideVirus, faHeading, faHeadphones, faHeadphonesAlt, faHeadset, faHeart, faHeartBroken, faHeartbeat, faHelicopter, faHighlighter, faHiking, faHippo, faHistory, faHockeyPuck, faHollyBerry, faHome, faHorse, faHorseHead, faHospital, faHospitalAlt, faHospitalSymbol, faHospitalUser, faHotTub, faHotdog, faHotel, faHourglass, faHourglassEnd, faHourglassHalf, faHourglassStart, faHouseDamage, faHouseUser, faHryvnia, faICursor, faIceCream, faIcicles, faIcons, faIdBadge, faIdCard, faIdCardAlt, faIgloo, faImage, faImages, faInbox, faIndent, faIndustry, faInfinity, faInfo, faInfoCircle, faItalic, faJedi, faJoint, faJournalWhills, faKaaba, faKey, faKeyboard, faKhanda, faKiss, faKissBeam, faKissWinkHeart, faKiwiBird, faLandmark, faLanguage, faLaptop, faLaptopCode, faLaptopHouse, faLaptopMedical, faLaugh, faLaughBeam, faLaughSquint, faLaughWink, faLayerGroup, faLeaf, faLemon, faLessThan, faLessThanEqual, faLevelDownAlt, faLevelUpAlt, faLifeRing, faLightbulb, faLink, faLiraSign, faList, faListAlt, faListOl, faListUl, faLocationArrow, faLock, faLockOpen, faLongArrowAltDown, faLongArrowAltLeft, faLongArrowAltRight, faLongArrowAltUp, faLowVision, faLuggageCart, faLungs, faLungsVirus, faMagic, faMagnet, faMailBulk, faMale, faMap, faMapMarked, faMapMarkedAlt, faMapMarker, faMapMarkerAlt, faMapPin, faMapSigns, faMarker, faMars, faMarsDouble, faMarsStroke, faMarsStrokeH, faMarsStrokeV, faMask, faMedal, faMedkit, faMeh, faMehBlank, faMehRollingEyes, faMemory, faMenorah, faMercury, faMeteor, faMicrochip, faMicrophone, faMicrophoneAlt, faMicrophoneAltSlash, faMicrophoneSlash, faMicroscope, faMinus, faMinusCircle, faMinusSquare, faMitten, faMobile, faMobileAlt, faMoneyBill, faMoneyBillAlt, faMoneyBillWave, faMoneyBillWaveAlt, faMoneyCheck, faMoneyCheckAlt, faMonument, faMoon, faMortarPestle, faMosque, faMotorcycle, faMountain, faMouse, faMousePointer, faMugHot, faMusic, faNetworkWired, faNeuter, faNewspaper, faNotEqual, faNotesMedical, faObjectGroup, faObjectUngroup, faOilCan, faOm, faOtter, faOutdent, faPager, faPaintBrush, faPaintRoller, faPalette, faPallet, faPaperPlane, faPaperclip, faParachuteBox, faParagraph, faParking, faPassport, faPastafarianism, faPaste, faPause, faPauseCircle, faPaw, faPeace, faPen, faPenAlt, faPenFancy, faPenNib, faPenSquare, faPencilAlt, faPencilRuler, faPeopleArrows, faPeopleCarry, faPepperHot, faPercent, faPercentage, faPersonBooth, faPhone, faPhoneAlt, faPhoneSlash, faPhoneSquare, faPhoneSquareAlt, faPhoneVolume, faPhotoVideo, faPiggyBank, faPills, faPizzaSlice, faPlaceOfWorship, faPlane, faPlaneArrival, faPlaneDeparture, faPlaneSlash, faPlay, faPlayCircle, faPlug, faPlus, faPlusCircle, faPlusSquare, faPodcast, faPoll, faPollH, faPoo, faPooStorm, faPoop, faPortrait, faPoundSign, faPowerOff, faPray, faPrayingHands, faPrescription, faPrescriptionBottle, faPrescriptionBottleAlt, faPrint, faProcedures, faProjectDiagram, faPumpMedical, faPumpSoap, faPuzzlePiece, faQrcode, faQuestion, faQuestionCircle, faQuidditch, faQuoteLeft, faQuoteRight, faQuran, faRadiation, faRadiationAlt, faRainbow, faRandom, faReceipt, faRecordVinyl, faRecycle, faRedo, faRedoAlt, faRegistered, faRemoveFormat, faReply, faReplyAll, faRepublican, faRestroom, faRetweet, faRibbon, faRing, faRoad, faRobot, faRocket, faRoute, faRss, faRssSquare, faRubleSign, faRuler, faRulerCombined, faRulerHorizontal, faRulerVertical, faRunning, faRupeeSign, faSadCry, faSadTear, faSatellite, faSatelliteDish, faSave, faSchool, faScrewdriver, faScroll, faSdCard, faSearch, faSearchDollar, faSearchLocation, faSearchMinus, faSearchPlus, faSeedling, faServer, faShapes, faShare, faShareAlt, faShareAltSquare, faShareSquare, faShekelSign, faShieldAlt, faShieldVirus, faShip, faShippingFast, faShoePrints, faShoppingBag, faShoppingBasket, faShoppingCart, faShower, faShuttleVan, faSign, faSignInAlt, faSignLanguage, faSignOutAlt, faSignal, faSignature, faSimCard, faSink, faSitemap, faSkating, faSkiing, faSkiingNordic, faSkull, faSkullCrossbones, faSlash, faSleigh, faSlidersH, faSmile, faSmileBeam, faSmileWink, faSmog, faThumbsUp
} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <Dashboard></Dashboard>
  );
}

export default App;

// You can think of these components as "pages"
// in your app.

function Home() {
  function party(e) {
    console.log(window);
    e.preventDefault();
    window.party.confetti(document.body);
    window.party.confetti(document.body);
    window.party.confetti(document.body);
  }



  return (
    <div>
      <h2>Home</h2>
      <a onClick={party} href="/">
        Click to execute the action
      </a>
    </div>
  );
}

function About() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <FontAwesomeIcon icon={faAddressBook} />
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter--) {
      // Pick a random index
      index = (Math.random() * counter) | 0;

      // And swap the last element with it
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  const icons = [faAd, faAddressBook, faAddressCard, faAdjust, faAirFreshener, faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faAllergies, faAmbulance, faAmericanSignLanguageInterpreting, faAnchor, faAngleDoubleDown, faAngleDoubleLeft, faAngleDoubleRight, faAngleDoubleUp, faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faAngry, faAnkh, faAppleAlt, faArchive, faArchway, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowAltCircleUp, faArrowCircleDown, faArrowCircleLeft, faArrowCircleRight, faArrowCircleUp, faArrowDown, faArrowLeft, faArrowRight, faArrowUp, faArrowsAlt, faArrowsAltH, faArrowsAltV, faAssistiveListeningSystems, faAsterisk, faAt, faAtlas, faAtom, faAudioDescription, faAward, faBaby, faBabyCarriage, faBackspace, faBackward, faBacon, faBacteria, faBacterium, faBahai, faBalanceScale, faBalanceScaleLeft, faBalanceScaleRight, faBan, faBandAid, faBarcode, faBars, faBaseballBall, faBasketballBall, faBath, faBatteryEmpty, faBatteryFull, faBatteryHalf, faBatteryQuarter, faBatteryThreeQuarters, faBed, faBeer, faBell, faBellSlash, faBezierCurve, faBible, faBicycle, faBiking, faBinoculars, faBiohazard, faBirthdayCake, faBlender, faBlenderPhone, faBlind, faBlog, faBold, faBolt, faBomb, faBone, faBong, faBook, faBookDead, faBookMedical, faBookOpen, faBookReader, faBookmark, faBorderAll, faBorderNone, faBorderStyle, faBowlingBall, faBox, faBoxOpen, faBoxTissue, faBoxes, faBraille, faBrain, faBreadSlice, faBriefcase, faBriefcaseMedical, faBroadcastTower, faBroom, faBrush, faBug, faBuilding, faBullhorn, faBullseye, faBurn, faBus, faBusAlt, faBusinessTime, faCalculator, faCalendar, faCalendarAlt, faCalendarCheck, faCalendarDay, faCalendarMinus, faCalendarPlus, faCalendarTimes, faCalendarWeek, faCamera, faCameraRetro, faCampground, faCandyCane, faCannabis, faCapsules, faCar, faCarAlt, faCarBattery, faCarCrash, faCarSide, faCaravan, faCaretDown, faCaretLeft, faCaretRight, faCaretSquareDown, faCaretSquareLeft, faCaretSquareRight, faCaretSquareUp, faCaretUp, faCarrot, faCartArrowDown, faCartPlus, faCashRegister, faCat, faCertificate, faChair, faChalkboard, faChalkboardTeacher, faChargingStation, faChartArea, faChartBar, faChartLine, faChartPie, faCheck, faCheckCircle, faCheckDouble, faCheckSquare, faCheese, faChess, faChessBishop, faChessBoard, faChessKing, faChessKnight, faChessPawn, faChessQueen, faChessRook, faChevronCircleDown, faChevronCircleLeft, faChevronCircleRight, faChevronCircleUp, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faChild, faChurch, faCircle, faCircleNotch, faCity, faClinicMedical, faClipboard, faClipboardCheck, faClipboardList, faClock, faClone, faClosedCaptioning, faCloud, faCloudDownloadAlt, faCloudMeatball, faCloudMoon, faCloudMoonRain, faCloudRain, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faCloudUploadAlt, faCocktail, faCode, faCodeBranch, faCoffee, faCog, faCogs, faCoins, faColumns, faComment, faCommentAlt, faCommentDollar, faCommentDots, faCommentMedical, faCommentSlash, faComments, faCommentsDollar, faCompactDisc, faCompass, faCompress, faCompressAlt, faCompressArrowsAlt, faConciergeBell, faCookie, faCookieBite, faCopy, faCopyright, faCouch, faCreditCard, faCrop, faCropAlt, faCross, faCrosshairs, faCrow, faCrown, faCrutch, faCube, faCubes, faCut, faDatabase, faDeaf, faDemocrat, faDesktop, faDharmachakra, faDiagnoses, faDice, faDiceD20, faDiceD6, faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo, faDigitalTachograph, faDirections, faDisease, faDivide, faDizzy, faDna, faDog, faDollarSign, faDolly, faDollyFlatbed, faDonate, faDoorClosed, faDoorOpen, faDotCircle, faDove, faDownload, faDraftingCompass, faDragon, faDrawPolygon, faDrum, faDrumSteelpan, faDrumstickBite, faDumbbell, faDumpster, faDumpsterFire, faDungeon, faEdit, faEgg, faEject, faEllipsisH, faEllipsisV, faEnvelope, faEnvelopeOpen, faEnvelopeOpenText, faEnvelopeSquare, faEquals, faEraser, faEthernet, faEuroSign, faExchangeAlt, faExclamation, faExclamationCircle, faExclamationTriangle, faExpand, faExpandAlt, faExpandArrowsAlt, faExternalLinkAlt, faExternalLinkSquareAlt, faEye, faEyeDropper, faEyeSlash, faFan, faFastBackward, faFastForward, faFaucet, faFax, faFeather, faFeatherAlt, faFemale, faFighterJet, faFile, faFileAlt, faFileArchive, faFileAudio, faFileCode, faFileContract, faFileCsv, faFileDownload, faFileExcel, faFileExport, faFileImage, faFileImport, faFileInvoice, faFileInvoiceDollar, faFileMedical, faFileMedicalAlt, faFilePdf, faFilePowerpoint, faFilePrescription, faFileSignature, faFileUpload, faFileVideo, faFileWord, faFill, faFillDrip, faFilm, faFilter, faFingerprint, faFire, faFireAlt, faFireExtinguisher, faFirstAid, faFish, faFistRaised, faFlag, faFlagCheckered, faFlagUsa, faFlask, faFlushed, faFolder, faFolderMinus, faFolderOpen, faFolderPlus, faFont, faFontAwesomeLogoFull, faFootballBall, faForward, faFrog, faFrown, faFrownOpen, faFunnelDollar, faFutbol, faGamepad, faGasPump, faGavel, faGem, faGenderless, faGhost, faGift, faGifts, faGlassCheers, faGlassMartini, faGlassMartiniAlt, faGlassWhiskey, faGlasses, faGlobe, faGlobeAfrica, faGlobeAmericas, faGlobeAsia, faGlobeEurope, faGolfBall, faGopuram, faGraduationCap, faGreaterThan, faGreaterThanEqual, faGrimace, faGrin, faGrinAlt, faGrinBeam, faGrinBeamSweat, faGrinHearts, faGrinSquint, faGrinSquintTears, faGrinStars, faGrinTears, faGrinTongue, faGrinTongueSquint, faGrinTongueWink, faGrinWink, faGripHorizontal, faGripLines, faGripLinesVertical, faGripVertical, faGuitar, faHSquare, faHamburger, faHammer, faHamsa, faHandHolding, faHandHoldingHeart, faHandHoldingMedical, faHandHoldingUsd, faHandHoldingWater, faHandLizard, faHandMiddleFinger, faHandPaper, faHandPeace, faHandPointDown, faHandPointLeft, faHandPointRight, faHandPointUp, faHandPointer, faHandRock, faHandScissors, faHandSparkles, faHandSpock, faHands, faHandsHelping, faHandsWash, faHandshake, faHandshakeAltSlash, faHandshakeSlash, faHanukiah, faHardHat, faHashtag, faHatCowboy, faHatCowboySide, faHatWizard, faHdd, faHeadSideCough, faHeadSideCoughSlash, faHeadSideMask, faHeadSideVirus, faHeading, faHeadphones, faHeadphonesAlt, faHeadset, faHeart, faHeartBroken, faHeartbeat, faHelicopter, faHighlighter, faHiking, faHippo, faHistory, faHockeyPuck, faHollyBerry, faHome, faHorse, faHorseHead, faHospital, faHospitalAlt, faHospitalSymbol, faHospitalUser, faHotTub, faHotdog, faHotel, faHourglass, faHourglassEnd, faHourglassHalf, faHourglassStart, faHouseDamage, faHouseUser, faHryvnia, faICursor, faIceCream, faIcicles, faIcons, faIdBadge, faIdCard, faIdCardAlt, faIgloo, faImage, faImages, faInbox, faIndent, faIndustry, faInfinity, faInfo, faInfoCircle, faItalic, faJedi, faJoint, faJournalWhills, faKaaba, faKey, faKeyboard, faKhanda, faKiss, faKissBeam, faKissWinkHeart, faKiwiBird, faLandmark, faLanguage, faLaptop, faLaptopCode, faLaptopHouse, faLaptopMedical, faLaugh, faLaughBeam, faLaughSquint, faLaughWink, faLayerGroup, faLeaf, faLemon, faLessThan, faLessThanEqual, faLevelDownAlt, faLevelUpAlt, faLifeRing, faLightbulb, faLink, faLiraSign, faList, faListAlt, faListOl, faListUl, faLocationArrow, faLock, faLockOpen, faLongArrowAltDown, faLongArrowAltLeft, faLongArrowAltRight, faLongArrowAltUp, faLowVision, faLuggageCart, faLungs, faLungsVirus, faMagic, faMagnet, faMailBulk, faMale, faMap, faMapMarked, faMapMarkedAlt, faMapMarker, faMapMarkerAlt, faMapPin, faMapSigns, faMarker, faMars, faMarsDouble, faMarsStroke, faMarsStrokeH, faMarsStrokeV, faMask, faMedal, faMedkit, faMeh, faMehBlank, faMehRollingEyes, faMemory, faMenorah, faMercury, faMeteor, faMicrochip, faMicrophone, faMicrophoneAlt, faMicrophoneAltSlash, faMicrophoneSlash, faMicroscope, faMinus, faMinusCircle, faMinusSquare, faMitten, faMobile, faMobileAlt, faMoneyBill, faMoneyBillAlt, faMoneyBillWave, faMoneyBillWaveAlt, faMoneyCheck, faMoneyCheckAlt, faMonument, faMoon, faMortarPestle, faMosque, faMotorcycle, faMountain, faMouse, faMousePointer, faMugHot, faMusic, faNetworkWired, faNeuter, faNewspaper, faNotEqual, faNotesMedical, faObjectGroup, faObjectUngroup, faOilCan, faOm, faOtter, faOutdent, faPager, faPaintBrush, faPaintRoller, faPalette, faPallet, faPaperPlane, faPaperclip, faParachuteBox, faParagraph, faParking, faPassport, faPastafarianism, faPaste, faPause, faPauseCircle, faPaw, faPeace, faPen, faPenAlt, faPenFancy, faPenNib, faPenSquare, faPencilAlt, faPencilRuler, faPeopleArrows, faPeopleCarry, faPepperHot, faPercent, faPercentage, faPersonBooth, faPhone, faPhoneAlt, faPhoneSlash, faPhoneSquare, faPhoneSquareAlt, faPhoneVolume, faPhotoVideo, faPiggyBank, faPills, faPizzaSlice, faPlaceOfWorship, faPlane, faPlaneArrival, faPlaneDeparture, faPlaneSlash, faPlay, faPlayCircle, faPlug, faPlus, faPlusCircle, faPlusSquare, faPodcast, faPoll, faPollH, faPoo, faPooStorm, faPoop, faPortrait, faPoundSign, faPowerOff, faPray, faPrayingHands, faPrescription, faPrescriptionBottle, faPrescriptionBottleAlt, faPrint, faProcedures, faProjectDiagram, faPumpMedical, faPumpSoap, faPuzzlePiece, faQrcode, faQuestion, faQuestionCircle, faQuidditch, faQuoteLeft, faQuoteRight, faQuran, faRadiation, faRadiationAlt, faRainbow, faRandom, faReceipt, faRecordVinyl, faRecycle, faRedo, faRedoAlt, faRegistered, faRemoveFormat, faReply, faReplyAll, faRepublican, faRestroom, faRetweet, faRibbon, faRing, faRoad, faRobot, faRocket, faRoute, faRss, faRssSquare, faRubleSign, faRuler, faRulerCombined, faRulerHorizontal, faRulerVertical, faRunning, faRupeeSign, faSadCry, faSadTear, faSatellite, faSatelliteDish, faSave, faSchool, faScrewdriver, faScroll, faSdCard, faSearch, faSearchDollar, faSearchLocation, faSearchMinus, faSearchPlus, faSeedling, faServer, faShapes, faShare, faShareAlt, faShareAltSquare, faShareSquare, faShekelSign, faShieldAlt, faShieldVirus, faShip, faShippingFast, faShoePrints, faShoppingBag, faShoppingBasket, faShoppingCart, faShower, faShuttleVan, faSign, faSignInAlt, faSignLanguage, faSignOutAlt, faSignal, faSignature, faSimCard, faSink, faSitemap, faSkating, faSkiing, faSkiingNordic, faSkull, faSkullCrossbones, faSlash, faSleigh, faSlidersH, faSmile, faSmileBeam, faSmileWink, faSmog];
  let c = shuffle([...icons]);
  c.length=8; 
  let cardObject = []; 
  [...c, ...c].forEach(function(ele){
    cardObject.push({icon: ele, solved: false, flip: false});
  })
  let newCards = shuffle(cardObject);
  const [cards, setCards] = useState(newCards);
  const [moves, setMoves] = useState(30);
  const [flippedCard, setFlippedCards] = useState([]);
  const [sameCard, setSameCard] = useState([...c]);

  // useEffect(() => {
  //   let cards = shuffle([...icons]);
  //   cards.length=4;
  //   //console.log(cards);
  //   setCards(cards);
  // });

  function flipMe(event, d, i) {  
    if(moves == 0 || flippedCard.length == 2)  {
      return;
    }
    let m = moves - 1;
    setMoves(m);
    
    let fC = flippedCard;
    fC.push(i);
    setFlippedCards(fC);
    
    // d.flip = !d.flip;
    // const flipped = document.querySelector(".flip-card.flip");
    // if(flipped) {
    //   flipped.classList.remove("flip");
    // }
    // event.target.parentElement.parentElement.classList.add("flip");
    // setTimeout(() => {
    //   event.target.parentElement.parentElement.classList.remove("flip");
    // }, 3000);

    let c = cards[i];
    c.flip = true;
    setCards(cards);

    if(flippedCard.length == 2) {
      let c1 = cards[flippedCard[0]];
      let c2 = cards[flippedCard[1]];

      setTimeout(() => {
        if(c1.icon == c2.icon) {
          c1.solved = true;
          c2.solved = true;
  
          let solvedCards = sameCard;
          let solvedItemIndex = solvedCards.indexOf(c1.icon);
          solvedCards.splice(solvedItemIndex, 1);
          setSameCard(solvedCards);
          window.party.confetti(document.body);
          if(sameCard.length == 0) {
            window.party.confetti(document.body);
            window.party.confetti(document.body);
            window.party.confetti(document.body);
            window.party.confetti(document.body);
            setTimeout(() => {
              window.party.confetti(document.body);
              window.party.confetti(document.body);
              window.party.confetti(document.body);              
            }, 1000);
            setTimeout(() => {
              window.party.confetti(document.body);
              window.party.confetti(document.body);
              window.party.confetti(document.body);              
            }, 2000);
          }
        }        
      }, 1000);

      setTimeout(() => {
        c1.flip = false;
        c2.flip = false;
        setCards(cards);
  
        setFlippedCards([]);
      }, 3000);      
    }    
    
  }

  function playAgain() {
    let c = shuffle([...icons]);
    c.length=8; 
    let cardObject = []; 
    [...c, ...c].forEach(function(ele){
      cardObject.push({icon: ele, solved: false, flip: false});
    })
    let newCards = shuffle(cardObject);
    setCards(newCards);
    setMoves(30);
    setFlippedCards([]);
    setSameCard([...c]);
  }

  function reverseFlip(event, d) {
    //d.flip = false;
    //event.target.parentElement.parentElement.classList.remove("flip");
  }
  return (
    <div>
    <div className="moves-section">
      <div className={moves < 5 ? "red moves" : "moves"}>Moves Left <span className="span-count">{moves}</span></div>
      {moves < 30 && moves >0 ? <div><a href="#" onClick={playAgain}>Restart</a></div> : "" }
      {moves === 0 && sameCard.length && sameCard.length !=0 > 0 ? <div><a href="#" onClick={playAgain}>Retry</a></div> : "" }
      {sameCard.length === 0 ? <div><a href="#" onClick={playAgain}>Play again</a></div> : "" }      
    </div>

    <div className="grid">
      {
        cards.map((d, index) => {
          return (
            <div className="grid-inner" key={index}>
              <div className={d.flip || d.solved ? "flip flip-card" : "flip-card"}>
                <div className="flip-card-inner">
                  <div className="flip-card-front" onClick={(event)=>{flipMe(event, d, index)}}>
                    {moves > 0 ? <FontAwesomeIcon icon={faSmileWink} /> : <FontAwesomeIcon icon={faSadCry} />}
                    
                  </div>
                  <div className="flip-card-back" onClick={(event)=>{reverseFlip(event, d, index)}}>
                    {
                      d.flip && !d.solved ? <FontAwesomeIcon icon={d.icon} size="9x" /> : ""
                    }  
                    {
                      d.solved ? <FontAwesomeIcon icon={faThumbsUp} size="sm" /> : ""
                    }                  
                  </div>
                </div>
              </div>
            </div>
          );

        })
      }
    </div>
    </div>
  );
}
