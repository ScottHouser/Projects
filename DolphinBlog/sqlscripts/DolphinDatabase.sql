DROP DATABASE IF EXISTS CapstoneProject;
CREATE DATABASE CapstoneProject;
USE CapstoneProject;

CREATE TABLE IF NOT EXISTS Categories(
category_id INT AUTO_INCREMENT NOT NULL,
category_name VARCHAR(50) UNIQUE NOT NULL,
PRIMARY KEY (category_id)
);

CREATE TABLE IF NOT EXISTS Hashtags(
hashtag_id INT AUTO_INCREMENT NOT NULL,
hashtag_name VARCHAR(50) UNIQUE NOT NULL,
PRIMARY KEY (hashtag_id)
);

CREATE TABLE IF NOT EXISTS Statuses(
status_id INT AUTO_INCREMENT NOT NULL,
status_name VARCHAR(50) NOT NULL,
PRIMARY KEY (status_id)
);

CREATE TABLE IF NOT EXISTS Posts(
post_id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(65) NOT NULL,
author VARCHAR (40) NOT NULL,
pub_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
category_id INT NOT NULL,
status_id INT NOT NULL DEFAULT 1,
likes INT NOT NULL DEFAULT 0,
photo_url NVARCHAR(400) NOT NULL,
content NVARCHAR(10000) NOT NULL,
synopsis NVARCHAR(500) NOT NULL,
FOREIGN KEY (category_id) REFERENCES Categories(category_id),
FOREIGN KEY (status_id) REFERENCES Statuses(status_id),
PRIMARY KEY (post_id)
);

CREATE TABLE IF NOT EXISTS Comments(
comment_id INT AUTO_INCREMENT NOT NULL,
comment_text VARCHAR(200) UNIQUE NOT NULL,
post_id INT NOT NULL,
FOREIGN KEY (post_id) REFERENCES Posts (post_id),
PRIMARY KEY (comment_id)
);

-- Do we need this table?  I'm under the impression that we don't 

-- CREATE TABLE IF NOT EXISTS CategoriesPosts(
-- cat_post_id INT AUTO_INCREMENT NOT NULL,
-- post_id INT NOT NULL,
-- category_id INT NOT NULL,
-- FOREIGN KEY (post_id) REFERENCES Posts (post_id),
-- FOREIGN KEY (category_id) REFERENCES Categories (category_id),
-- PRIMARY KEY (cat_post_id)
-- );

CREATE TABLE IF NOT EXISTS HashtagsPosts(
post_id INT NOT NULL,
hashtag_id INT NOT NULL,
FOREIGN KEY (post_id) REFERENCES Posts (post_id),
FOREIGN KEY (hashtag_id) REFERENCES Hashtags (hashtag_id)
);

CREATE TABLE IF NOT EXISTS Tabs(
tab_id INT AUTO_INCREMENT NOT NULL,
tab_name VARCHAR(20) NOT NULL,
PRIMARY KEY (tab_id)
);

CREATE TABLE IF NOT EXISTS Pages(
page_id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(15) NOT NULL,
content NVARCHAR(10000) NOT NULL,
tab_id INT NOT NULL,
status_id INT NOT NULL DEFAULT 1,
PRIMARY KEY (page_id),
FOREIGN KEY (tab_id) REFERENCES Tabs (tab_id),
FOREIGN KEY (status_id) REFERENCES Statuses (status_id)
);

INSERT INTO Categories (category_id, category_name)
				VALUES  ( 1, "Training"),
						( 2, "Travels"),
                        ( 3, "Style"),
						( 4, "Personnel"),
                        ( 5, "Mission"),
                        ( 6, "Other");
                        
INSERT INTO Hashtags (hashtag_id, hashtag_name)
				VALUES  ( 1, "Finning"),
						( 2, "DolphinMania"),
                        ( 3, "Cute"),
                        ( 4, "Echolocation"),
                        ( 5, "SharksSuck"),
						( 6, "USSRnostalgia"),
                        ( 7, "RejectCapitalism"),
                        ( 8, "Rescue"),
                        ( 9, "ComradesForLife"),
                        ( 10, "EnemySubLocations");

INSERT INTO Statuses (status_id, status_name)
				VALUES  ( 1, "Edit Mode"),
						( 2, "Awaiting Approval"),
                        ( 3, "Posted");

-- pub_date (timestamp) is omitted from this because it is set automatically 
INSERT INTO Posts (post_id, title, author, category_id, status_id, likes, photo_url, content, synopsis)
			VALUES  ( 1, "Why Dolphins Prefer Communism", "Anastasia Romanov", 6, 3, 15, "https://www.extremetech.com/wp-content/uploads/2015/12/DolphinJump-640x353.jpg", "<p><img style='display: block; margin-left: auto; margin-right: auto;' src='https://www.extremetech.com/wp-content/uploads/2015/12/DolphinJump-640x353.jpg' alt='' width='640' height='353' /></p><p>&nbsp;</p><div class='col-md-6 col-md-offset-1'><h5>Why Dolphins Prefer Communism</h5></div><div class='col-md-4'><h4>11/23/2016</h4></div><div id='text-div1' class='col-md-8 col-md-offset-1'><h5>I am often asked, upon meeting a new face in America 'Anastasia, what do you do for a living?'. I do not hold this question against them. After all, when you spend your whole life under Capitalism, it is hard to see other human beings as anything other than exploitable labor.<br /><br />To this question I respond honestly, and in turn their faces respond in honest amazement. 'Wow! You really train dolphins for a living? Thats so Cool!' It is here that the inqusition begins. <br /><br />'Can you talk to dolphins?!' no.<br /><br />'Can you teach a dolphin to play fetch?!' yes.<br /><br />'Can you perform at my 5 year olds birthday party?!' maybe.<br /><br />'Are they really as rapey as people say?!' All my dolphins are subject to rigorous background checks. <br /><br />'Are they really smarter than people?!'<br /><br />This is the question that I ask my self every night. Could it be that a lack of thumbs are the only thing holding back this hyper intellegent species from ruling our world?<br /><br />What have humans built with their thumbs? They've built weapons to subjugate their fellow man. They've built factories to exploit their fellow mans labor. They created money, so that the few could rule the many simply by changing a number.<br /><br />Yet while man struggles amongst the rocks and the dust, the dolphin lives in harmony beneath the waves. The dolphin cannot build weapons, but when they fight, it is not amongst them selves, but against predatory sharks and squids. A dolphin cannot build a factory, but when they require food, they hunt in unity and share their bounty. A dolphin has no need for money, but if they had it, they would swollow it and choke to death. (STOP THROWING COINS IN MY FREAKING DOLPHIN TANK). <br /><br />Pure and simple, dolphins have chosen to live under communism. And for that their intellegence is without question. <br /><br />-Anastasia Romanov</h5></div>", "An insight into the socio-economic viewpoint of the world's most intellgent sea-dwelling mammal.An insight into the socio-economic viewpoint of the world's most intellgent sea-dwelling mammal."),
					( 2, "My Escape from North Korea on Dolphinback", "Anastasia Romanov", 2, 3, 12, "http://www.freakingnews.com/pictures/125500/Vladimir-Putin-Riding-a-Dolphin-125674.jpg", "<p><img style='display: block; margin-left: auto; margin-right: auto;' src='http://www.freakingnews.com/pictures/125500/Vladimir-Putin-Riding-a-Dolphin-125674.jpg' width='403' height='322' /></p><p style='text-align: center;'>&nbsp;</p><h1 style='text-align: center;'>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, 'consectetur', и занялся его <span style='text-decoration: underline;'><strong>поисками в классической</strong></span> латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги 'de Finibus Bonorum et Malorum' ('О пределах добра и зла'), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, 'Lorem ipsum dolor sit amet..', происходит от одной из строк в разделе 1.10.32</h1>", "The moment had come.  Enough with the breadlines.  Enough with saluting that silly little man with his silly little haircut.  I couldn't say anything, so i hopped on my dolphin and rode"),
					( 3, "Operation D.O.L.P.H.I.N.", "Anastasia Romanov", 4, 3, 1, "http://i340.photobucket.com/albums/o359/Demonicraze/girls%20with%20weapons/Russian-1-2.jpg", "<p>&nbsp;</p><p style='text-align: center;'><a href='http://i340.photobucket.com/albums/o359/Demonicraze/girls%20with%20weapons/Russian-1-2.jpg'><img src='http://i340.photobucket.com/albums/o359/Demonicraze/girls%20with%20weapons/Russian-1-2.jpg' /></a></p><h1 style=text-align: center;'><span style='background-color: #993300; color: #ffffff;'>Love and Dolphins... &nbsp; and&nbsp;GUNS</span></h1>", "Deemed CLASSIFIED AND CONFIDENTIAL by the Soviet Administration for Intercoastal Trafficking and SeaLife Control.Deemed CLASSIFIED AND CONFIDENTIAL by the Soviet Administration for Intercoastal Trafficking and SeaLife Control. "),
                    ( 4, "Meet My New Assistant, Svetlana Aleksandrovna Valova", "Anastasia Romanov", 5, 3, 22, "http://girlswithguns.org/wp-content/uploads/2015/04/RozaSharina.jpg", "<p>&nbsp;</p><p style='text-align: center;'><img src='http://girlswithguns.org/wp-content/uploads/2015/04/RozaSharina.jpg' width='482' height='325' /></p><p style='text-align: center;'>&nbsp;</p><p style='text-align: center;'>Hi, I'm Lana, long time dolphin lover and now a proud member of Team Classified Dolphin Training. &nbsp;</p><p style='text-align: center;'>I look forward to working closely with the community Americanski in 'training' these marvelous animals to 'build a better world'.&nbsp;</p>", "I look forward to working closely with the community Americanski in 'training' these marvelous animals to 'build a better world.I look forward to working closely with the community Americanski in 'training' these marvelous animals to 'build a better world.'"),
                    ( 5, "Why Swedish Dolphins Resent MIT alum Dolph Lundgren", "Svetlana Aleksandrovna Valova", 6, 1, 0, "https://upload.wikimedia.org/wikipedia/en/3/33/Lundgren_Ivan_Drago.jpg", "<p>&nbsp;</p><p style='text-align: center;'><img src='https://upload.wikimedia.org/wikipedia/en/3/33/Lundgren_Ivan_Drago.jpg' alt='' width='225' height='280' />&nbsp;</p><h1 style='text-align: center;'>DOLPH LUNDGREN CONTENT</h1>", "This old rivalry goes much deeper than the shared first five letters of the names.  You might say that the relation between Dolph and Swedish dolphins is 'Rocky' at best..."),
                    ( 6, "That Time I Took A Bunch of LSD and Could Speak Dolphinese", "Svetlana Aleksandrovna Valova", 1, 2, 0, "http://www.smithsonianchannel.com/site/image-bin/images/0_0_3415122/0_0_3415122_01_640x333.jpg", "<p>&nbsp;</p><p style='text-align: center;'><img src='http://www.smithsonianchannel.com/site/image-bin/images/0_0_3415122/0_0_3415122_01_640x333.jpg' /></p><h1 style='text-align: center;'>Love and Dolphins... &nbsp; and DRUGS</h1>", "John Lilly was born to a wealthy family on January 6, 1915, in Saint Paul, Minnesota. His father was Richard Coyle Lilly, president of the First National Bank of St. Paul. His mother was Rachel Lenor Cunningham, whose family owned the Cunningham & Haas Company, a large stockyards company in... "),
                    ( 7, "Why I Don't Work With Sharks", "Anastasia Romanov", 1, 3, 7, "https://i.ytimg.com/vi/q20yauJateE/maxresdefault.jpg", "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://i.ytimg.com/vi/q20yauJateE/maxresdefault.jpg\" alt=\"Shark\" width=\"722\" height=\"406\" /></p>\n<p>&nbsp;</p>\n<p>Biodiesel health goth hella gluten-free narwhal venmo. Seitan waistcoat banjo kinfolk, la croix hexagon portland semiotics. Pour-over selfies tbh, unicorn franzen truffaut poke cray squid direct trade. You probably haven't heard of them gluten-free yuccie four loko, taxidermy activated charcoal thundercats kombucha keffiyeh put a bird on it cold-pressed flexitarian kitsch asymmetrical. 8-bit viral pok pok, dreamcatcher meh church-key keffiyeh pour-over authentic. Art party biodiesel farm-to-table, 8-bit hammock sartorial snackwave. Brooklyn normcore iceland letterpress succulents vexillologist, retro pickled whatever flexitarian iPhone paleo meggings lumbersexual.</p>\n<p>Farm-to-table jean shorts typewriter humblebrag bitters la croix +1 iceland wolf whatever. Neutra hella mustache try-hard waistcoat, next level ugh. Brooklyn swag echo park mumblecore, wolf subway tile succulents. Seitan tbh tattooed, 90's irony locavore kombucha. Deep v sriracha glossier, vegan cred letterpress +1 green juice pitchfork whatever. Gentrify swag before they sold out iPhone, narwhal live-edge snackwave keytar fixie 90's subway tile poke echo park etsy. Umami authentic blog intelligentsia banjo, hashtag stumptown cornhole yuccie you probably haven't heard of them.</p>\n<p>Hella shabby chic poke gastropub, tattooed seitan knausgaard fanny pack vice whatever wayfarers. Shoreditch chambray post-ironic crucifix yr. Tattooed woke kinfolk, portland kogi celiac whatever scenester. 8-bit tumblr food truck listicle. Squid vaporware kitsch, hot chicken cornhole PBR&amp;B church-key trust fund. Fanny pack celiac echo park, slow-carb ramps blue bottle af retro street art bicycle rights small batch venmo air plant. Tofu +1 tbh lo-fi gochujang.</p>\n<p>Deep v next level echo park readymade flannel organic. Mlkshk celiac hammock plaid 3 wolf moon. Flexitarian mumblecore hexagon pitchfork, paleo umami jianbing occupy meggings gentrify. Occupy copper mug vape activated charcoal. Fashion axe keffiyeh pinterest, food truck polaroid tote bag XOXO pork belly VHS. Waistcoat farm-to-table pabst mumblecore, selvage VHS tilde vexillologist portland mustache fanny pack vaporware man bun. Iceland unicorn four loko gentrify, chillwave brunch microdosing leggings chambray farm-to-table keytar artisan.</p>", "Breathes with gills, heart that kills. Breathes with hole, heart of gold. Breathes with gills, heart that kills. Breathes with hole, heart of gold."),
                    ( 8, "More Sitings of the Stegadolphisaurus in Chernobyl Pond", "Svetlana Valova", 2, 1, 40, "http://www.freakingnews.com/pictures/53000/Crested-Dolphin--53448.jpg","<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"http://www.freakingnews.com/pictures/53000/Crested-Dolphin--53448.jpg\" alt=\"\" width=\"468\" height=\"351\" /></p>\n<p>&nbsp;</p>\n<p>Biodiesel health goth hella gluten-free narwhal venmo. Seitan waistcoat banjo kinfolk, la croix hexagon portland semiotics. Pour-over selfies tbh, unicorn franzen truffaut poke cray squid direct trade. You probably haven't heard of them gluten-free yuccie four loko, taxidermy activated charcoal thundercats kombucha keffiyeh put a bird on it cold-pressed flexitarian kitsch asymmetrical. 8-bit viral pok pok, dreamcatcher meh church-key keffiyeh pour-over authentic. Art party biodiesel farm-to-table, 8-bit hammock sartorial snackwave. Brooklyn normcore iceland letterpress succulents vexillologist, retro pickled whatever flexitarian iPhone paleo meggings lumbersexual.</p>\n<p>Farm-to-table jean shorts typewriter humblebrag bitters la croix +1 iceland wolf whatever. Neutra hella mustache try-hard waistcoat, next level ugh. Brooklyn swag echo park mumblecore, wolf subway tile succulents. Seitan tbh tattooed, 90's irony locavore kombucha. Deep v sriracha glossier, vegan cred letterpress +1 green juice pitchfork whatever. Gentrify swag before they sold out iPhone, narwhal live-edge snackwave keytar fixie 90's subway tile poke echo park etsy. Umami authentic blog intelligentsia banjo, hashtag stumptown cornhole yuccie you probably haven't heard of them.</p>\n<p>Hella shabby chic poke gastropub, tattooed seitan knausgaard fanny pack vice whatever wayfarers. Shoreditch chambray post-ironic crucifix yr. Tattooed woke kinfolk, portland kogi celiac whatever scenester. 8-bit tumblr food truck listicle. Squid vaporware kitsch, hot chicken cornhole PBR&amp;B church-key trust fund. Fanny pack celiac echo park, slow-carb ramps blue bottle af retro street art bicycle rights small batch venmo air plant. Tofu +1 tbh lo-fi gochujang.</p>", "The reactors of Chernobyl's infamous meltdown have seemingly cooled, but the evolutionary aftereffects of the event are just heating up..."),
					( 9, "Soviet Exile Drowned at SeaWorld", "Anastasia Romanov", 5, 1, 4, "https://i1.wp.com/www.siasat.com/wp-content/uploads/2015/08/man-drowning.jpg?resize=660%2C330", "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://i1.wp.com/www.siasat.com/wp-content/uploads/2015/08/man-drowning.jpg?resize=660%2C330\" alt=\"\" width=\"482\" height=\"241\" /></p>\n<p>Farm-to-table jean shorts typewriter humblebrag bitters la croix +1 iceland wolf whatever. Neutra hella mustache try-hard waistcoat, next level ugh. Brooklyn swag echo park mumblecore, wolf subway tile succulents. Seitan tbh tattooed, 90's irony locavore kombucha. Deep v sriracha glossier, vegan cred letterpress +1 green juice pitchfork whatever. Gentrify swag before they sold out iPhone, narwhal live-edge snackwave keytar fixie 90's subway tile poke echo park etsy. Umami authentic blog intelligentsia banjo, hashtag stumptown cornhole yuccie you probably haven't heard of them.</p>\n<p>Hella shabby chic poke gastropub, tattooed seitan knausgaard fanny pack vice whatever wayfarers. Shoreditch chambray post-ironic crucifix yr. Tattooed woke kinfolk, portland kogi celiac whatever scenester. 8-bit tumblr food truck listicle. Squid vaporware kitsch, hot chicken cornhole PBR&amp;B church-key trust fund. Fanny pack celiac echo park, slow-carb ramps blue bottle af retro street art bicycle rights small batch venmo air plant. Tofu +1 tbh lo-fi gochujang.</p>\n<p>Deep v next level echo park readymade flannel organic. Mlkshk celiac hammock plaid 3 wolf moon. Flexitarian mumblecore hexagon pitchfork, paleo umami jianbing occupy meggings gentrify. Occupy copper mug vape activated charcoal. Fashion axe keffiyeh pinterest, food truck polaroid tote bag XOXO pork belly VHS. Waistcoat farm-to-table pabst mumblecore, selvage VHS tilde vexillologist portland mustache fanny pack vaporware man bun. Iceland unicorn four loko gentrify, chillwave brunch microdosing leggings chambray farm-to-table keytar artisan.</p>\n<p>&nbsp;</p>", "A former KGB spy and Putin adversary who had been living in exile in the United States for 15 months was found on Thursday floating in Shamu's tank.  Shamu was helpful in extracting the man from the tank, but has refused to comment."),
                    ( 10, "New Russian Naval Uniforms Embrace Biodiversity Amongst Ranks",  "Svetlana Valova", 3, 3, 15, "https://www.askideas.com/media/09/Dolphin-In-Military-Hat-Funny-Picture.jpg", "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://www.askideas.com/media/09/Dolphin-In-Military-Hat-Funny-Picture.jpg\" alt=\"\" width=\"517\" height=\"359\" /></p>\n<p>Farm-to-table jean shorts typewriter humblebrag bitters la croix +1 iceland wolf whatever. Neutra hella mustache try-hard waistcoat, next level ugh. Brooklyn swag echo park mumblecore, wolf subway tile succulents. Seitan tbh tattooed, 90's irony locavore kombucha. Deep v sriracha glossier, vegan cred letterpress +1 green juice pitchfork whatever. Gentrify swag before they sold out iPhone, narwhal live-edge snackwave keytar fixie 90's subway tile poke echo park etsy. Umami authentic blog intelligentsia banjo, hashtag stumptown cornhole yuccie you probably haven't heard of them.</p>\n<p>Poke gastropub, tattooed seitan knausgaard fanny pack vice whatever wayfarers. Shoreditch chambray post-ironic crucifix yr. Tattooed woke kinfolk, portland kogi celiac whatever scenester. 8-bit tumblr food truck listicle. Squid vaporware kitsch, hot chicken cornhole PBR&amp;B church-key trust fund. Fanny pack celiac echo park, slow-carb ramps blue bottle af retro street art bicycle rights small batch venmo air plant. Tofu +1 tbh lo-fi gochujang.</p>\n<p>Deep v next level echo park readymade flannel organic. Mlkshk celiac hammock plaid 3 wolf moon. Flexitarian mumblecore hexagon pitchfork, paleo umami jianbing occupy meggings gentrify. Occupy copper mug vape activated charcoal. Fashion axe keffiyeh pinterest, food truck polaroid tote bag XOXO pork belly VHS. Waistcoat farm-to-table pabst mumblecore, selvage VHS tilde vexillologist portland mustache fanny pack vaporware man bun. Iceland unicorn four loko gentrify, chillwave brunch microdosing leggings chambray farm-to-table keytar artisan.</p>\n<p>&nbsp;</p>", "Russia has enlisted fashion designer Vera Wang to develop  a line of uniforms that can accommodate both human and sea-dwelling members of their military with hopes of uniting the species for a common cause and brighter future."), 
                    ( 11, "How to make a Cyanide capsule that won't dissolve in salt water", "Svetlana Valova", 6, 2, 1, "http://static.guim.co.uk/sys-images/Guardian/Pix/cartoons/2012/2/2/1328204560157/pills-dissolving-in-water-007.jpg", "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"http://static.guim.co.uk/sys-images/Guardian/Pix/cartoons/2012/2/2/1328204560157/pills-dissolving-in-water-007.jpg\" /><br /><br /></p>\n<p>Farm-to-table jean shorts typewriter humblebrag bitters la croix +1 iceland wolf whatever. Neutra hella mustache try-hard waistcoat, next level ugh. Brooklyn swag echo park mumblecore, wolf subway tile succulents. Seitan tbh tattooed, 90's irony locavore kombucha. Deep v sriracha glossier, vegan cred letterpress +1 green juice pitchfork whatever. Gentrify swag before they sold out iPhone, narwhal live-edge snackwave keytar fixie 90's subway tile poke echo park etsy. Umami authentic blog intelligentsia banjo, hashtag stumptown cornhole yuccie you probably haven't heard of them.</p>\n<p>Poke gastropub, tattooed seitan knausgaard fanny pack vice whatever wayfarers. Shoreditch chambray post-ironic crucifix yr. Tattooed woke kinfolk, portland kogi celiac whatever scenester. 8-bit tumblr food truck listicle. Squid vaporware kitsch, hot chicken cornhole PBR&amp;B church-key trust fund. Fanny pack celiac echo park, slow-carb ramps blue bottle af retro street art bicycle rights small batch venmo air plant. Tofu +1 tbh lo-fi gochujang.</p>\n<p>Deep v next level echo park readymade flannel organic. Mlkshk celiac hammock plaid 3 wolf moon. Flexitarian mumblecore hexagon pitchfork, paleo umami jianbing occupy meggings gentrify. Occupy copper mug vape activated charcoal. Fashion axe keffiyeh pinterest, food truck polaroid tote bag XOXO pork belly VHS. Waistcoat farm-to-table pabst mumblecore, selvage VHS tilde vexillologist portland mustache fanny pack vaporware man bun. Iceland unicorn four loko gentrify, chillwave brunch microdosing leggings chambray farm-to-table keytar artisan.</p>\n<p>&nbsp;</p>", "Ukranian Nuclear Physicist was captured and forced to reveal the secret formula of his saltwater insoluble cyanide capsule before he was able to swallow it fast enough."),
                    ( 12, "Double Agent Dolphin Defector Dilemma", "Anastasia Romanov", 4, 1, 1, "https://s-media-cache-ak0.pinimg.com/originals/93/cf/20/93cf2088395d8d42efb397a3a0ae9892.jpg", "<p><br /><br /><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://s-media-cache-ak0.pinimg.com/originals/93/cf/20/93cf2088395d8d42efb397a3a0ae9892.jpg\" alt=\"\" width=\"615\" height=\"408\" /></p>\n<p>Farm-to-table jean shorts typewriter humblebrag bitters la croix +1 iceland wolf whatever. Neutra hella mustache try-hard waistcoat, next level ugh. Brooklyn swag echo park mumblecore, wolf subway tile succulents. Seitan tbh tattooed, 90's irony locavore kombucha. Deep v sriracha glossier, vegan cred letterpress +1 green juice pitchfork whatever. Gentrify swag before they sold out iPhone, narwhal live-edge snackwave keytar fixie 90's subway tile poke echo park etsy. Umami authentic blog intelligentsia banjo, hashtag stumptown cornhole yuccie you probably haven't heard of them.</p>\n<p>Poke gastropub, tattooed seitan knausgaard fanny pack vice whatever wayfarers. Shoreditch chambray post-ironic crucifix yr. Tattooed woke kinfolk, portland kogi celiac whatever scenester. 8-bit tumblr food truck listicle. Squid vaporware kitsch, hot chicken cornhole PBR&amp;B church-key trust fund. Fanny pack celiac echo park, slow-carb ramps blue bottle af retro street art bicycle rights small batch venmo air plant. Tofu +1 tbh lo-fi gochujang.</p>\n<p>Deep v next level echo park readymade flannel organic. Mlkshk celiac hammock plaid 3 wolf moon. Flexitarian mumblecore hexagon pitchfork, paleo umami jianbing occupy meggings gentrify. Occupy copper mug vape activated charcoal. Fashion axe keffiyeh pinterest, food truck polaroid tote bag XOXO pork belly VHS. Waistcoat farm-to-table pabst mumblecore, selvage VHS tilde vexillologist portland mustache fanny pack vaporware man bun. Iceland unicorn four loko gentrify, chillwave brunch microdosing leggings chambray farm-to-table keytar artisan.</p>\n<p>&nbsp;</p>" , "Our resident morale dolphin, Csar Aleksander VIII, escaped his tank Thursday.  According to all reports, he may have defected to the United States.  If you see this dolphin, report it to the appropriate authorities immediately, and do NOT interact.");
                    
                    

INSERT IGNORE INTO Comments  (comment_id, comment_text, post_id)
			       VALUES (1, "Wow who would have guessed someone who works around so many blowholes would become one themselves. Get a job, you useless HIPPIE!!", 1),
						  (2, "So true! I guess you need more than thumbs to seize the means of production", 1),
						  (3, "Coins sink in water, but if you give enough to a dolphin he will just float there...  Can't explain that!", 1),
                          (4, "AMAZING!!  I'm crying!!  You are a hero to women and sea creatures everywhere!!!!!", 2),
                          (5, "Comment Removed.", 3),
                          (6, "Comment will be declassified 16 May 2042", 3),
                          (7, "Comment has been Removed.", 3),
                          (8, "Comment will be declassified on 1 January 2110", 3),
                          (9, "What a Baaaaaaaaaaaaaaaaaabe!", 4),
                          (10, "What year was that picture taken!?!  Do the Russians already have time travel technology, or just really embarrassing photography equipment? U-S-A! U-S-A!", 4),
                          (11, "Cuz he's a dingus. Duh.", 5),
                          (12, "The guy speaks like 8 languages and looks like that.  It would be an act of god if he WASN'T a dingus", 5),
                          (13, "Those dolphins clearly don't understand who they're messin with.", 5),
                          (14, "Is that legal?", 6),
                          (15, "Did you take the LSD straight-up, or did you boof it like a real hero would have?", 6),
                          (16, "Don't be such a chicken, lady.  You're more likely to get hit by a car than attacked by a shark." ,7);
                          
INSERT INTO HashtagsPosts(post_id, hashtag_id)
								VALUES (1, 7), 
									   (1, 8), 
									   (2, 9), 
									   (2, 1), 
									   (2, 8), 
									   (3, 10), 
									   (3, 9), 
									   (4, 3), 
									   (4, 2), 
									   (4, 9), 
									   (5, 1), 
									   (6, 1), 
									   (6, 2), 
									   (6, 9),
                                       (7, 4),
                                       (7, 5),
                                       (8, 6),
                                       (8, 1),
                                       (8, 3),
                                       (9, 6),
                                       (9, 9),
                                       (9, 8),
                                       (10, 3),
                                       (10, 2),
                                       (10, 4),
                                       (11, 10),
                                       (11, 8),
                                       (11, 6),
                                       (11, 7),
                                       (12, 2),
                                       (12, 1),
                                       (12, 8);
     
INSERT INTO Tabs (tab_id, tab_name)
				 VALUES (1, "Russia"),
						(2, "Dolphins"),
                        (3, "Orcas");

INSERT INTO Pages (page_id, title, content, tab_id, status_id)
				VALUES	(1, "Popinov", "<h2><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"http://i.imgur.com/YuCTY0n.jpg?fb\" alt=\"\" width=\"480\" height=\"270\" /></h2>\n<h2 style=\"text-align: center;\"><strong>Dolphin 119c3B-2r: Activated 2011</strong></h2>\n<p>&nbsp; &nbsp; &nbsp; <strong>Многие думают,</strong> что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, 'consectetur', и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги 'de Finibus Bonorum et Malorum' ('О пределах добра и зла'), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, 'Lorem ipsum dolor sit amet..', происходит от одной из строк в разделе 1.10.32 Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, 'consectetur', и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги 'de Finibus Bonorum et Malorum' ('О пределах добра и зла'), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, 'Lorem ipsum dolor sit amet..', происходит от одной из строк в разделе 1.10.32</p>", 2, 3),
						(2, "Vladimir", "<h2><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://i.ytimg.com/vi/UXaf3DZEpus/maxresdefault.jpg\" alt=\"\" width=\"756\" height=\"425\" /></h2>\n<h2 style=\"text-align: center;\">Dolphin 208A: Activated 2014</h2>\n<p>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, 'consectetur', и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги 'de Finibus Bonorum et Malorum' ('О пределах добра и зла'), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, 'Lorem ipsum dolor sit amet..', происходит от одной из строк в разделе 1.10.32 Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, 'consectetur', и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги 'de Finibus Bonorum et Malorum' ('О пределах добра и зла'), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, 'Lorem ipsum dolor sit amet..', происходит от одной из строк в разделе 1.10.32</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>", 2, 1),
						(3, "Rules", "<p style=\"text-align: center;\"><img src=\"https://i.ytimg.com/vi/ZXZ8fiBVPHk/hqdefault.jpg\" alt=\"\" width=\"480\" height=\"360\" /></p>\n<p>&nbsp;</p>\n<ul>\n<li><strong>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</strong></li>\n<li><strong>Aliquam tincidunt mauris eu risus.</strong></li>\n<li><strong>Vestibulum auctor dapibus neque.</strong></li>\n<li><strong>Nunc dignissim risus id metus.</strong></li>\n<li><strong>Cras ornare tristique elit.</strong></li>\n<li><strong>Vivamus vestibulum nulla nec ante.</strong></li>\n<li><strong>Praesent placerat risus quis eros.</strong></li>\n<li><strong>Fusce pellentesque suscipit nibh.</strong></li>\n<li><strong>Integer vitae libero ac risus egestas placerat.</strong></li>\n<li><strong>Vestibulum commodo felis quis tortor.</strong></li>\n<li><strong>Ut aliquam sollicitudin leo.</strong></li>\n<li><strong>Cras iaculis ultricies nulla.</strong></li>\n<li><strong>Donec quis dui at dolor tempor interdum.</strong></li>\n<li><strong>Vivamus molestie gravida turpis.</strong></li>\n<li><strong>Fusce lobortis lorem at ipsum semper sagittis.</strong></li>\n<li><strong>Nam convallis pellentesque nisl.</strong></li>\n<li><strong>Integer malesuada commodo nulla.</strong></li>\n</ul>", 1, 3),
						(4, "Mission", """<p style=\"text-align: center;\"><img src=\"https://img1.steemit.com/0x0/https://httpsimage.com/img/combat-dolphins-featured.jpg\" alt=\"\" width=\"817\" height=\"467\" /></p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">Swag hammock before they sold out blog pinterest kickstarter ugh gluten-free keffiyeh, ramps locavore salvia. Authentic cred you probably haven't heard of them, deep v jianbing cardigan chillwave tattooed four loko tumeric ramps forage 8-bit la croix trust fund. Affogato health goth la croix, franzen sartorial disrupt humblebrag literally asymmetrical beard sustainable sriracha single-origin coffee gluten-free. Occupy roof party twee affogato, polaroid cornhole blog synth banh mi iceland. Iceland trust fund fashion axe, raw denim kitsch pop-up PBR&amp;B brooklyn schlitz typewriter. XOXO unicorn tousled tbh, lo-fi kale chips quinoa butcher mlkshk live-edge marfa portland. Bespoke messenger bag mlkshk iPhone.</p>", 2, 1),
						(5, "Orcas", "YUUGE", 3, 1);   






CREATE TABLE IF NOT EXISTS `users` (
 `user_id` int(11) NOT NULL AUTO_INCREMENT,
 `username` varchar(20) NOT NULL,
 `password` varchar(20) NOT NULL,
 `enabled` tinyint(1) NOT NULL,
 PRIMARY KEY (`user_id`),
 KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;
--
-- Dumping data for table `users`
--
INSERT INTO `users` (`user_id`, `username`, `password`, `enabled`) VALUES
(1, 'admin', 'password', 1),
(2, 'employee', 'password', 1)
;
--
-- Table structure for table `authorities`
--
CREATE TABLE IF NOT EXISTS `authorities` (
 `username` varchar(20) NOT NULL,
 `authority` varchar(20) NOT NULL,
 KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--
-- Dumping data for table `authorities`
--
INSERT INTO `authorities` (`username`, `authority`) VALUES
('admin', 'ROLE_ADMIN'),
('employee', 'ROLE_USER');

;
--
-- Constraints for table `authorities`
--
ALTER TABLE `authorities`
 ADD CONSTRAINT `authorities_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users`(`username`);
 