//1st MENU Contents

var flexmenu1=new ddlistmenu('flexmenu1', 'flexdropdownmenu') //var menuvar=new ddlistmenu('menuid', 'menuclass')

var subul3=flexmenu1.addItem('automotive.htm', 'AUTOMOTIVE' , '_parent').addSubMenu() //create new 2nd level menu and assign it to new variable
	var subsubul3=subul3.addItem('automotive_synchrodrivetimingbelts_overview.htm', 'Synchro-Drive Timing Belts' , '_parent').addSubMenu() //create new 3rd level menu and assign it to new variable
		subsubul3.addItem('automotive_synchrodrivetimingbelts_overview.htm', 'Overview', '_parent')
		subsubul3.addItem('automotive_synchrodrivetimingbelts_range.htm', 'Range' , '_parent')
		subsubul3.addItem('automotive_synchrodrivetimingbelts_application.htm', 'Application' , '_parent')
			var subsubul3=subul3.addItem('automotive_polybelts_overview.htm', 'Poly-V Belts' , '_parent').addSubMenu() //create new 3rd level menu and assign it to new variable
		subsubul3.addItem('automotive_polybelts_overview.htm', 'Overview' , '_parent')
		subsubul3.addItem('automotive_polybelts_range.htm', 'Range' , '_parent')
		subsubul3.addItem('automotive_polybelts_application.htm', 'Application' , '_parent')
					var subsubul3=subul3.addItem('automotive_rawedgebelts_overview.htm', 'Raw Edge Belts' , '_parent').addSubMenu() //create new 3rd level menu and assign it to new variable
		subsubul3.addItem('automotive_rawedgebelts_overview.htm', 'Overview' , '_parent')
		subsubul3.addItem('automotive_rawedgebelts_range.htm', 'Range' , '_parent')
		
		var subsubul3=subul3.addItem('automotive.htm', 'Tensioners'  , '_parent').addSubMenu() //create new 3rd level menu and assign it to new variable
				subsubul3.addItem('automotive_tensioners_range.htm', 'Range' , '_parent')
		


var subul5=flexmenu1.addItem('industrial.htm', 'INDUSTRIAL ' , '_parent').addSubMenu() //create new 2nd level menu and assign it to new variable
	subul5.addItem('synchrodrivetimingbelts.htm', 'Synchro-Drive Timing Belts' , '_parent')
		subul5.addItem('polybelts.htm', 'Poly-V Belts' , '_parent')
			subul5.addItem('rawedgebelts.htm', 'Raw Edge Belts' , '_parent')




//2nd MENU Contents
var flexmenu2=new ddlistmenu('flexmenu2', 'flexdropdownmenu')
flexmenu2.addItem('http://www.dynamicdrive.com', 'Dynamic Drive')
flexmenu2.addItem('http://www.cssdrive.com', 'CSS Drive')
flexmenu2.addItem('http://www.javascriptkit.com', 'JavaScript Kit')
flexmenu2.addItem('http://www.codingforums.com', 'Coding Forums')
flexmenu2.addItem('http://www.javascriptkit.com/domref/', 'DOM Reference')