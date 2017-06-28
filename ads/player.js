var player = videojs('content_video');

var options = {
  id: 'content_video',
//  adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/5965368/NTD.TV_video&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&description_url=http://ntd.tv/&correlator=[timestamp]'

  adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&' +
      'iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&' +
      'impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&' +
      'cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&' +
      'vid=short_onecue&correlator='

};

// This must be called before player.play() below.
player.ima(options);
player.ima.requestAds();
// On mobile devices, you must call initializeAdDisplayContainer as the result
// of a user action (e.g. button click). If you do not make this call, the SDK
// will make it for you, but not as the result of a user action. For more info
// see our examples, all of which are set up to work on mobile devices.
// player.ima.initializeAdDisplayContainer();

// This must be called after player.ima(...) above.
player.play();