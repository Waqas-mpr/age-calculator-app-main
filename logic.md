step1:

years=current-year - birthday-year


step2:

current-month=11
brithday-month=12

if(current-month<birthday-month){
	years--
	
//borrow the one year and one year have 12 months
	months=current-month=current-month + 12
	total-months=months - birthday-month


}
else{

months=current-month - birthday-month
}


step3:

current-day=11
brithday-day=12

if(current-day < birthday-day){
	total-months--
	
//borrow the one month and one month have 28,29,30,31 total days
	days=current-day = current-day + [28,29,30,31]
	total-days = days- birthday-day


}
else{

days=current-day- birthday-day
}
