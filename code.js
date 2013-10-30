document.addEventListener("deviceready", onDeviceReady, false);

$(function(){
	onDeviceReady()	;
	
	});

var dbShell ;

function onDeviceReady() {

var myValue = window.localStorage.getItem("init");
if(myValue==null)
{

dbShell = window.openDatabase("BaharNarenj", "1.0", "BaharNarenj", 9000000);
 
dbShell.transaction(setupTable,dbErrorHandler,getEntries);
window.localStorage.setItem("init","1");
}



	 
//document.addEventListener("online", isOnline, false);

}

function setupTable(tx){
	
	tx.executeSql("CREATE TABLE IF NOT EXISTS amaken(id INTEGER PRIMARY KEY,title,des,px,py)");	
	tx.executeSql("CREATE TABLE IF NOT EXISTS picamaken(id INTEGER PRIMARY KEY,idmakan INTEGER,pic)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS hotel(id INTEGER PRIMARY KEY,tel,address,title,px,py,website)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS resturan(id INTEGER PRIMARY KEY,tel,address,title,px,py,website)");
	tx.executeSql("CREATE TABLE IF NOT EXISTS kharid(id INTEGER PRIMARY KEY,title,des,px,py)");		
			
			
		tx.executeSql('insert into kharid(id,title,des,px,py) values(1,"مرکز خرید الهیه","شامل مغازه های فروش پوشاک , ساعت و صنایع دستی","36.564315","53.065096‎‎")');	
		
		
	tx.executeSql('insert into kharid(id,title,des,px,py) values(2,"مرکز خرید پردیس","شامل مغازه های فروش پوشاک , مواد غذایی و کافی شاپ و رستوران","36.662326","53.074601‎")');			
		
		
		tx.executeSql('insert into kharid(id,title,des,px,py) values(3,"پاساژ شهر","شامل مغازه های فروش پوشاک , فرش و ...","36.564634","53.055090‎")');		
		
		tx.executeSql('insert into kharid(id,title,des,px,py) values(4,"مرکز خرید افرا","شامل مغازه های زنجیره ای حامی ارائه دهنده پوشاک وسایل منزل مواد غذایی و...","36.503082","52.935899‎")');
		
			tx.executeSql('insert into kharid(id,title,des,px,py) values(5,"بازارچه ترکمن","شامل مغازه های فروش لباس و صنایع دستی","36.571148","53.062585‎‎")');				
		
		
		
		
		
		
		tx.executeSql('insert into resturan(id,tel,address,title,px,py,website) values(1,"01513284080-3","ساري- کیلومتر 3 جاده ساري به نکاء","رستوران حاج حسن","36.562807","53.134247‎‎","www.test.ir")');		
				
			tx.executeSql('insert into resturan(id,tel,address,title,px,py,website) values(2,"01513284080-3","ساري- کیلومتر 12 جاده فرح اباد ","رستوران شالی","36.662326","53.074601‎‎","www.test.ir")');			
				
				
	tx.executeSql('insert into resturan(id,tel,address,title,px,py,website) values(3,"01513284080-3","ساري- بلوار داراب ","رستوران محسن","36.554154","53.069798‎‎","www.test.ir")');					
				
tx.executeSql('insert into resturan(id,tel,address,title,px,py,website) values(4,"01513284080-3","ساري- بزرگراه کنار گذر شمالب بعد از پمپ بنزین مفیدی ","اکبر جوجه ","36.564634","53.055090‎","www.test.ir")');	


tx.executeSql('insert into resturan(id,tel,address,title,px,py,website) values(5,"01513284080-3","ساري- بلوار داراب ","کبابی عبدالله ","36.554258","53.066601‎‎","www.test.ir")');

tx.executeSql('insert into resturan(id,tel,address,title,px,py,website) values(6,"01513284080-3","ساري- میدان خزر ","رستوران تای سیز ","36.583305","53.063030‎‎","www.test.ir")');

tx.executeSql('insert into resturan(id,tel,address,title,px,py,website) values(7,"01513284080-3","ساري- کیلومتر 12 جاده ساری - قائمشهر  ","رستوران افرا ","36.503082","52.935899‎‎","www.test.ir")');

tx.executeSql('insert into resturan(id,tel,address,title,px,py,website) values(8,"01513284080-3","ساري- خزر ","فست فود آسمان ","36.578799","53.061367‎‎","www.test.ir")');


			
			
tx.executeSql('insert into hotel(id,tel,address,title,px,py,website) values(1,"0152-3882101-7","ساری صنایع چوب و کاغذ جاده کیاسر","هتل سالاردره - 4 ستاره","36.456308","53.093616","www.test.ir")');		
			
			
tx.executeSql('insert into hotel(id,tel,address,title,px,py,website) values(2,"01512442548","ساری کیلومتر 10 جاده نکا","هتل بادله - 4 ستاره","36.578179","53.195751‎","www.test.ir")');		
				
			
tx.executeSql('insert into hotel(id,tel,address,title,px,py,website) values(3,"0151328522","کیلومتر 2 جاده نکا","هتل عرب - 2 ستاره","36.563669","53.101423‎","www.test.ir")');	


tx.executeSql('insert into hotel(id,tel,address,title,px,py,website) values(4,"01513255090","ساری ابتدای کمربندی تجن","هتل اسرم - 3 ستاره","36.566530","53.081811‎‎","www.test.ir")');


	
tx.executeSql('insert into hotel(id,tel,address,title,px,py,website) values(5,"01512232002","کیلومتر 5 جاده ساری قائمشهر","هتل نوید - 4 ستاره","36.526088","52.981217‎","www.test.ir")');				
			
			
	tx.executeSql('insert into hotel(id,tel,address,title,px,py,website) values(6,"01512133071","کیلومتر 5 جاده خزر اباد","هتل نارنج - 3 ستاره","36.628995","53.069280‎","www.test.ir")');	
	
	
	tx.executeSql('insert into hotel(id,tel,address,title,px,py,website) values(7,"01513245600","ساری بلوار طالقانی روبروی پمپ بنزین","مهمانپذیر سارویه - 2 ستاره","36.566564","53.069669‎","www.test.ir")');	
	
	
	tx.executeSql('insert into hotel(id,tel,address,title,px,py,website) values(8,"01513251791","ساری میدان حلال احمر اول کمربندی","مهمانپذیر تجن - 3 ستاره","36.564944","53.084110‎","www.test.ir")');	
	
	
	tx.executeSql('insert into hotel(id,tel,address,title,px,py,website) values(9,"01213242493","ساری میدان ساعت","مهمانپذیر توکل - 2 ستاره","36.566185","53.058803‎","www.test.ir")');	
	
	
	tx.executeSql('insert into hotel(id,tel,address,title,px,py,website) values(10,"01512227231","ساری خیابان جمهوری","مهمانپذیر خزر - 1 ستاره","36.564634","53.055090‎","www.test.ir")');	
			
			
			
					
			
				
			
			
				
	tx.executeSql('insert into picamaken(id,idmakan,pic) values(1,1,"images/z1.jpg")');
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(2,1,"images/z3.jpg")');
	tx.executeSql('insert into picamaken(id,idmakan,pic) values(22,1,"images/z2.jpg")');
	
	tx.executeSql('insert into picamaken(id,idmakan,pic) values(3,2,"images/e1.jpg")');
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(4,2,"images/e2.jpg")');
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(5,2,"images/e3.jpg")');
				tx.executeSql('insert into picamaken(id,idmakan,pic) values(21,2,"images/e4.jpg")');
				
				
	
	tx.executeSql('insert into picamaken(id,idmakan,pic) values(6,3,"images/s1.jpg")');
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(7,3,"images/s2.gif")');
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(8,3,"images/s3.jpg")');
		
			
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(9,4,"images/n1.jpg")');
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(10,4,"images/n2.jpg")');
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(11,4,"images/n3.jpg")');
		
		
			tx.executeSql('insert into picamaken(id,idmakan,pic) values(12,5,"images/m2.jpg")');
		
			tx.executeSql('insert into picamaken(id,idmakan,pic) values(13,6,"images/v1.jpg")');
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(14,6,"images/v2.jpeg")');
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(15,6,"images/v3.jpg")');
		
		
				tx.executeSql('insert into picamaken(id,idmakan,pic) values(16,7,"images/f1.jpg")');
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(17,7,"images/f2.jpg")');
tx.executeSql('insert into picamaken(id,idmakan,pic) values(24,7,"images/f3.jpg")');
tx.executeSql('insert into picamaken(id,idmakan,pic) values(23,7,"images/f4.jpg")');
		
					tx.executeSql('insert into picamaken(id,idmakan,pic) values(18,8,"images/j1.jpg")');
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(19,8,"images/j2.jpg")');
		tx.executeSql('insert into picamaken(id,idmakan,pic) values(20,8,"images/j3.jpg")');
		
		
tx.executeSql('insert into amaken(id,title,des,px,py) values(1,"پارک جنگلی شهید زارع","پارك زيبا و ديدني شهيد زار ع در 3 كيلومتري شرق شهر ساري و در جانب جاده ساري به بهشهر قرار دارد و بعلت مجاورت با تپه‌هاي جنگلي كم ارتفاع در دامنه البرز، بسيار زيبا و چشمگير است براي استفاده گردشگران نيز داراي امكاناتي براي اقامت كوتاه مدت مي‌باشد. مخصوصاً بهترين مكان براي كساني است كه مي خواهند به صورت رايگان شب اقامت داشته باشند","36.554051","53.150772‎")');
	
	
tx.executeSql('insert into amaken(id,title,des,px,py) values(2,"عمارت کلبادی"," عمارت منوچهرخان کلبادی واقع در محله ی آب انبار نو حدود یکصدوسی سال پیش بدستور سردار جلیل از امراء ارتش وقت ساخته شد و بنام فرزند بزرگش امیر نصرت شکوه نظام به امیریه معروف شد.امیر نصرت در جوانی فوت شد و سردار بنا را به فرزند وی منوچهرخان بخشید.منوچهرخان کلبادی که بعدها از ملاکین منطقه و زمانی نیز نماینده مردم ساری در مجلس شورای ملی بود در سال ۱۳۶۲ دار فانی را وداع گفت و این بنا در سال ۱۳۷۰ در اختیار سازمان میراث فرهنگی قرار گرفت.سبک معماری این ساختمان از تکایای دوره ی قاجاری برگرفته شده و دو بخش اندرونی و بیرونی دارد.بنای اصلی این عمارت در بخش اندرونی در دو طبقه و یک زیرزمین احداث شده و هر طبقه دارای یک شاه نشین و اتاقهای دو طرفه است.شاه نشین طبقه دوم از زیباترین اتاقهای این عمارت است و جای جای آن یادآمد شیوه های هنرهای تزئینی دوره قاجاری است.مصالح ساختمانی این بنا شامل چوب و آجر و بام آن بصورت شیروانی و سفال پوش میباشد","36.565494","53.059555‎")');		


tx.executeSql('insert into amaken(id,title,des,px,py) values(3,"سد سليمان تنگه","سد شهید رجایی که از آن با عنوان سد سلیمان تنگه نیز یاد می‌شود در ۴۵ کیلومتری جنوب غربی ساری در جاده‌ای به سمت سمنان بعد از روستای تاکام و در نزدیکی روستاهایی چون ورکی و افراچال در منطقه‌ای کوهستانی و سرسبز واقع شده‌است. مطالعات ساخت این سد که در سال ۱۳۳۶ شروع شد با شروع عملیات اجرایی آن در شهریور سال ۱۳۷۰ ادامه پیدا کرده و در سال ۱۳۷۵ نیز به پایان رسید        این سد در سال ۱۳۷۹ برای بازدید مسافرین و گردشگران آماده شد، محیط اطراف و رودخانه آن به منظور گردش و اقامت مخصوصا برای افراد تور بسیار مناسب است، از جمله امکانات گردشگری در این محیط می‌توان به اقامت شبانه در کنار رودخانه تجن و در دهکده آرامش، قایقرانی، اسکی روی آب، اتوبوس دریایی، پدالو در اسکله شیرین رود، بازدید از تاج سد با گرفتن بلیط در روزها و نیز ماهیگیری نام برد.وجود ویلاهای دو خوابه، چهار خوابه، اردویی، سالن‌های اجتماعات سر پوشیده و روباز، رستوران‌ها و سالن‌های غذا خوری به سبک‌های مختلف، زمین ورزش و پارک بازی، پیست تپه پیمایی و جنگل نوردی، آلاچیق از دیگر امکانات و پتانسیل‌هایی است که این مجتمع تفریحی، سیاحتی برای استفاده گردشگران تدارک دیده‌است","36.245242","53.246599‎")');	


tx.executeSql('insert into amaken(id,title,des,px,py) values(4,"آب انبار نو","این آب انبار نیز در مركز شهر ساری و در محله ی آب انبار نو در مجاورت خیابان ۱۸دی قرار دارد و به لحاظ نوع كار‌بری شبیه آب انبار میرزا مهدی است.«آب انبار نو» كه در گویش محلی به نوانبار معروف است، در خیابان قارن، در محله‌ای به همین نام در شهر ساری قرار دارد. بانی بنای آن خورشید خانم از خاندان كنی‌هاست. این آب انبار كه در اواسط دوره قاجاریه احداث شد، از بزرگترین آب انبارهای شهر و دارای پلان مدور و سقف گنبدی و هشت پنجره نورگیر برای تهویه است. ارتفاع آب انبار تا بالای نورگیر 21 متر، ارتفاع مخزن آب حدود 13 متر و اندود داخل مخزن از جنس ساروج است. كف مخزن با آجر مفروش شده و مصالح بام گنبدی از آجر و ساروج است.سردر آب‌انبار به صورت طاق بزرگ جناغی با تزیینات آجری بندكشی شده است و در طرفین آن دو اطاق نما با تزیینات كاشی معرق به چشم می‌خورد. در حال حاضر پلكان، پاشیر و مخزن این آب‌انبار كاملاً سالم مانده و بنا از سوی میراث فرهنگی مازندران در دست مرمت و بازپیرایی است.","36.564901","53.062257‎")');	


tx.executeSql('insert into amaken(id,title,des,px,py) values(5,"امامزاده یحیی","برج‌ آجري‌ امامزاده‌ يحيي‌ در شهر ساري‌ واقع‌ شده‌ و داراي‌ كتيبه‌، صندوق‌ و در نفيس‌چوبي‌ است‌. طبق‌ مفاد كتيبه‌ موجود، صندوق‌ چوبي‌ آن‌ در سال‌ ۸۴۹ هجري‌ قمري‌ ساخته‌ شد و به‌ استناد شجره‌نامه‌ يحيي‌ از فرزندان‌ امام‌ موسي‌ كاظم‌ (ع‌) است‌. برج‌ اين‌ ساختمان‌ كه‌ ۲۰ متر ارتفاع‌ دارد، از بدنه‌ مدور و گنبدهرمي‌ شكل‌، تشكيل‌ شده‌ است‌.","36.564164","53.053804‎")');	



tx.executeSql('insert into amaken(id,title,des,px,py) values(6,"امام‌زاده عباس","یكی از مزارات با شكوه و زیبای شهرستان ساری ، حرم امامزاده عباس (ع) است كه در شرق شهر ساری بلوار امام رضا خیابان امامزاده عباس واقع شده است.در گذشته این آرامگاه در دهكده آزادگله از دهكده های اندرود شهرستان ساری واقع بود اما اكنون به جهت گسترش شهر ، این منطقه جزء شهر ساری میباشد .امامزاده عبّاس از رواة محدثین شیعه بشمار میآید و تفسیر علی بن ابراهیم قمی (ع) را روایت کرده است . او به احتمال قوی در زمان امام هادی (ع) به دنیا آمده  و در عصر غیبت صغری ( 250 - 310ه.ق ) نشو نمو یافته و به مراتب علمی دست پیدا کرده است ، سپس جهت استفاده بیشتر به قم مهاجرت و از اساتید فّنِ حدیث کسب علم نموده و خود راوی اخبار زیادی بوده است","36.567770","53.093649‎")');	


tx.executeSql('insert into amaken(id,title,des,px,py) values(7,"مجموعه تاریخی فرح‌آباد","مجموعه تاریخی فرح‌آباد در ۲۸ کیلومتری شمال شهر ساری و در ورودی فرح‌آباد و در ۲کیلومتری ساحل دریای مازندران در محدوده فعلی روستای فرح آباد قرار دارد. این مجموعه شامل مسجد، پل، دیوارهای بر جای مانده از یک کاخ سلطنتی است که به دستور شاه‌عباس‌صفوی ساخته شده و تفرج‌گاه ساحلی صفوی بوده‌است. مسجد با ایوانهای بلند، شبستانها. حجره هاو مناره‌ها از مهم‌ترین بناهای تاریخی استان مازندران به شمار می‌رود.شاه عباس به دلیل اینکه از طرف مادر بهشهری بود علاقه فراوانی به آبادانی مازندران داشت و از این رو بناهای زیادی در مازندران احداث نمود. فرح اباد در آن زمان روستای کوچکی بود به نام طاهان که در دوره صفویه به بندری پر رونق تبدیل و به فرح آباد تغییر نام و به دارالسرور و دارالسلطنه شهرت یافت.","36.791828","53.110053‎")');	



tx.executeSql('insert into amaken(id,title,des,px,py) values(8,"مسجد جامع ساری","مسجد جامع ساری مربوط به سده‌های اولیه دوران‌های تاریخی پس از اسلام - دوره قاجار است و در ساری، محله چناربن، داخل بازار نرگسیه واقع شده و این اثر در تاریخ ۸ اسفند ۱۳۷۷ با شمارهٔ ثبت ۲۲۷۲ به‌عنوان یکی از آثار ملی ایران به ثبت رسیده است    مسجد جامع ساری که قدیمی ترین و نخستین مسجد مازندران است و قبل از آنکه به مسجد تبدیل شود آتشکده زرتشتیان بوده است.محوطه مسجد در سالهای گذشته چند بار گمانه زنی شده و آثار تاریخی بسیاری از آن خارج شد که سرنوشت بعضی از این آثار نا معلوم است.","36.564535","53.058026‎")');	

   
}



function dbErrorHandler(err){
 alert("DB Error: "+err.message + "\nCode="+err.code);
}


function getEntries() {
	


}


  $(document).on('pageinit', '#page4',function(e,data){  
 	 
	 
	var db = window.openDatabase("BaharNarenj", "1.0", "BaharNarenj", 9000000);
        db.transaction(queryDB, errorCB);	
    });
	
	
	  $(document).on('pageinit', '#page6',function(e,data){  
 	 
	 
	var db = window.openDatabase("BaharNarenj", "1.0", "BaharNarenj", 9000000);
        db.transaction(queryDB2, errorCB);	
    });



	  $(document).on('pageinit', '#page7',function(e,data){  
 	 
	 
	var db = window.openDatabase("BaharNarenj", "1.0", "BaharNarenj", 9000000);
        db.transaction(queryDB3, errorCB);	
    });


	  $(document).on('pageinit', '#page11',function(e,data){  
 	 
	 
	var db = window.openDatabase("BaharNarenj", "1.0", "BaharNarenj", 9000000);
        db.transaction(queryDB4, errorCB);	
    });




	(function(window, PhotoSwipe){
		
			document.addEventListener('DOMContentLoaded', function(){
			
			alert('dsdsds');
				var
					options = {},
					instance = PhotoSwipe.attach( window.document.querySelectorAll('.gallery2 a'), options );
			
			}, false);
			
			
		}(window, window.Code.PhotoSwipe));


		 function queryDB4(tx) {
        tx.executeSql('SELECT * FROM kharid', [], querySuccess4, errorCB);
    }
	
 
 		 function queryDB3(tx) {
        tx.executeSql('SELECT * FROM resturan', [], querySuccess3, errorCB);
    }
 
 
 

	
		 function queryDB2(tx) {
        tx.executeSql('SELECT * FROM hotel', [], querySuccess2, errorCB);
    }
	
	
	 function queryDB(tx) {
        tx.executeSql('SELECT * FROM amaken', [], querySuccess, errorCB);
    }
	
	
	  function errorCB(err) {
       alert("Error processing SQL: "+err.code);
    }
	
	
	 function querySuccess(tx, results) {
        var len = results.rows.length;
       
	   var list="";
        for (var i=0; i<len; i++){
			
			
			list+= '<li id="custom-li">';
               list+=  '<a href="makan.html?id='+results.rows.item(i).id+'" rel="external">';
                   
                  list+= ' <div class="left">';
                     list+=  ' <h3 style="direction:rtl;font:14px koodak;font-weight:bold;">'+results.rows.item(i).title+'</h3>';
                      
                 list+=  ' </div>';
                   
                list+= '</a>';
               list+= ' <a href="makan.html?id='+results.rows.item(i).id+'" data-rel="page" data-transition="slideup" id="left-split-icon" data-theme="b"></a>';

            list+=' </li>';
			 
			 
            
        }
		
		 $(".loadamaken").empty();
        $(".loadamaken").append(list);
		$(".loadamaken").listview("refresh");
    }
	
	
	


	 function querySuccess2(tx, results) {
        var len = results.rows.length;
       
	   var list="";
        for (var i=0; i<len; i++){
			
			
			list+= '<li id="custom-li">';
               list+=  '<a href="hotel.html?id='+results.rows.item(i).id+'" rel="external">';
                   
                  list+= ' <div class="left">';
                     list+=  ' <h3 style="direction:rtl;font:14px koodak;font-weight:bold;">'+results.rows.item(i).title+'</h3>';
                      
                 list+=  ' </div>';
                   
                list+= '</a>';
               list+= ' <a href="hotel.html?id='+results.rows.item(i).id+'" data-rel="page" data-transition="slideup" id="left-split-icon" data-theme="b"></a>';
            list+=' </li>';
			 
			 
            
        }
		
		 $(".loadhotel").empty();
        $(".loadhotel").append(list);
		$(".loadhotel").listview("refresh");
    }




	 function querySuccess3(tx, results) {
        var len = results.rows.length;
       
	   var list="";
        for (var i=0; i<len; i++){
			
			
			list+= '<li id="custom-li">';
               list+=  '<a href="resturan.html?id='+results.rows.item(i).id+'" rel="external">';
                   
                  list+= ' <div class="left">';
                     list+=  ' <h3 style="direction:rtl;font:14px koodak;font-weight:bold;">'+results.rows.item(i).title+'</h3>';
                      
                 list+=  ' </div>';
                   
                list+= '</a>';
               list+= ' <a href="resturan.html?id='+results.rows.item(i).id+'" data-rel="page" data-transition="slideup" id="left-split-icon" data-theme="b"></a>';
            list+=' </li>';
			 
			 
            
        }
		
		 $(".loadresturan").empty();
        $(".loadresturan").append(list);
		$(".loadresturan").listview("refresh");
    }





	 function querySuccess4(tx, results) {
        var len = results.rows.length;
       
	   var list="";
        for (var i=0; i<len; i++){
			
			
			list+= '<li id="custom-li">';
               list+=  '<a href="kharid.html?id='+results.rows.item(i).id+'" rel="external">';
                   
                  list+= ' <div class="left">';
                     list+=  ' <h3 style="direction:rtl;font:14px koodak;font-weight:bold;">'+results.rows.item(i).title+'</h3>';
                      
                 list+=  ' </div>';
                   
                list+= '</a>';
               list+= ' <a href="kharid.html?id='+results.rows.item(i).id+'" data-rel="page" data-transition="slideup" id="left-split-icon" data-theme="b"></a>';
            list+=' </li>';
			 
			 
            
        }
		
		 $(".loadkharid").empty();
        $(".loadkharid").append(list);
		$(".loadkharid").listview("refresh");
    }
//shoro baz kardane database



function isOnline() {
	
}

function checkConnection() {
var networkState = navigator.network.connection.type;
var states = {};
states[Connection.UNKNOWN] = 'Unknown connection';
states[Connection.ETHERNET] = 'Ethernet connection';
states[Connection.WIFI] = 'WiFi connection';
states[Connection.CELL_2G] = 'Cell 2G connection';
states[Connection.CELL_3G] = 'Cell 3G connection';
states[Connection.CELL_4G] = 'Cell 4G connection';
states[Connection.NONE] = 'No network connection';
alert('Connection type: ' + states[networkState]);
}// JavaScript Document