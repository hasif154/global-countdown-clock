export interface Country {
  name: string;
  timezone: string;
  searchTerms?: string[];
}

export const countries: Country[] = [
  // Afghanistan
  { name: "Afghanistan - Kabul", timezone: "Asia/Kabul", searchTerms: ["afghanistan", "kabul"] },
  
  // Albania
  { name: "Albania - Tirana", timezone: "Europe/Tirane", searchTerms: ["albania", "tirana", "tirane"] },
  
  // Algeria
  { name: "Algeria - Algiers", timezone: "Africa/Algiers", searchTerms: ["algeria", "algiers"] },
  
  // Andorra
  { name: "Andorra", timezone: "Europe/Andorra", searchTerms: ["andorra"] },
  
  // Angola
  { name: "Angola - Luanda", timezone: "Africa/Luanda", searchTerms: ["angola", "luanda"] },
  
  // Antarctica
  { name: "Antarctica - Casey", timezone: "Antarctica/Casey", searchTerms: ["antarctica", "casey"] },
  { name: "Antarctica - Davis", timezone: "Antarctica/Davis", searchTerms: ["antarctica", "davis"] },
  { name: "Antarctica - Mawson", timezone: "Antarctica/Mawson", searchTerms: ["antarctica", "mawson"] },
  { name: "Antarctica - McMurdo", timezone: "Antarctica/McMurdo", searchTerms: ["antarctica", "mcmurdo"] },
  { name: "Antarctica - Palmer", timezone: "Antarctica/Palmer", searchTerms: ["antarctica", "palmer"] },
  { name: "Antarctica - Rothera", timezone: "Antarctica/Rothera", searchTerms: ["antarctica", "rothera"] },
  { name: "Antarctica - Syowa", timezone: "Antarctica/Syowa", searchTerms: ["antarctica", "syowa"] },
  { name: "Antarctica - Vostok", timezone: "Antarctica/Vostok", searchTerms: ["antarctica", "vostok"] },
  
  // Argentina
  { name: "Argentina - Buenos Aires", timezone: "America/Argentina/Buenos_Aires", searchTerms: ["argentina", "buenos aires"] },
  { name: "Argentina - Córdoba", timezone: "America/Argentina/Cordoba", searchTerms: ["argentina", "cordoba", "córdoba"] },
  { name: "Argentina - Mendoza", timezone: "America/Argentina/Mendoza", searchTerms: ["argentina", "mendoza"] },
  { name: "Argentina - Ushuaia", timezone: "America/Argentina/Ushuaia", searchTerms: ["argentina", "ushuaia"] },
  
  // Armenia
  { name: "Armenia - Yerevan", timezone: "Asia/Yerevan", searchTerms: ["armenia", "yerevan"] },
  
  // Australia (Multiple Timezones)
  { name: "Australia - Sydney (AEDT)", timezone: "Australia/Sydney", searchTerms: ["australia", "sydney", "nsw", "new south wales"] },
  { name: "Australia - Melbourne (AEDT)", timezone: "Australia/Melbourne", searchTerms: ["australia", "melbourne", "victoria"] },
  { name: "Australia - Brisbane (AEST)", timezone: "Australia/Brisbane", searchTerms: ["australia", "brisbane", "queensland"] },
  { name: "Australia - Perth (AWST)", timezone: "Australia/Perth", searchTerms: ["australia", "perth", "western australia"] },
  { name: "Australia - Adelaide (ACDT)", timezone: "Australia/Adelaide", searchTerms: ["australia", "adelaide", "south australia"] },
  { name: "Australia - Darwin (ACST)", timezone: "Australia/Darwin", searchTerms: ["australia", "darwin", "northern territory"] },
  { name: "Australia - Hobart (AEDT)", timezone: "Australia/Hobart", searchTerms: ["australia", "hobart", "tasmania"] },
  { name: "Australia - Lord Howe Island", timezone: "Australia/Lord_Howe", searchTerms: ["australia", "lord howe"] },
  
  // Austria
  { name: "Austria - Vienna", timezone: "Europe/Vienna", searchTerms: ["austria", "vienna", "wien"] },
  
  // Azerbaijan
  { name: "Azerbaijan - Baku", timezone: "Asia/Baku", searchTerms: ["azerbaijan", "baku"] },
  
  // Bahamas
  { name: "Bahamas - Nassau", timezone: "America/Nassau", searchTerms: ["bahamas", "nassau"] },
  
  // Bahrain
  { name: "Bahrain", timezone: "Asia/Bahrain", searchTerms: ["bahrain", "manama"] },
  
  // Bangladesh
  { name: "Bangladesh - Dhaka", timezone: "Asia/Dhaka", searchTerms: ["bangladesh", "dhaka"] },
  
  // Barbados
  { name: "Barbados", timezone: "America/Barbados", searchTerms: ["barbados", "bridgetown"] },
  
  // Belarus
  { name: "Belarus - Minsk", timezone: "Europe/Minsk", searchTerms: ["belarus", "minsk"] },
  
  // Belgium
  { name: "Belgium - Brussels", timezone: "Europe/Brussels", searchTerms: ["belgium", "brussels", "bruxelles"] },
  
  // Belize
  { name: "Belize", timezone: "America/Belize", searchTerms: ["belize", "belmopan"] },
  
  // Benin
  { name: "Benin - Porto-Novo", timezone: "Africa/Porto-Novo", searchTerms: ["benin", "porto-novo", "cotonou"] },
  
  // Bhutan
  { name: "Bhutan - Thimphu", timezone: "Asia/Thimphu", searchTerms: ["bhutan", "thimphu"] },
  
  // Bolivia
  { name: "Bolivia - La Paz", timezone: "America/La_Paz", searchTerms: ["bolivia", "la paz", "sucre"] },
  
  // Bosnia and Herzegovina
  { name: "Bosnia and Herzegovina - Sarajevo", timezone: "Europe/Sarajevo", searchTerms: ["bosnia", "herzegovina", "sarajevo"] },
  
  // Botswana
  { name: "Botswana - Gaborone", timezone: "Africa/Gaborone", searchTerms: ["botswana", "gaborone"] },
  
  // Brazil (Multiple Timezones)
  { name: "Brazil - São Paulo (BRT)", timezone: "America/Sao_Paulo", searchTerms: ["brazil", "são paulo", "sao paulo", "rio de janeiro", "brasilia"] },
  { name: "Brazil - Manaus (AMT)", timezone: "America/Manaus", searchTerms: ["brazil", "manaus", "amazonas"] },
  { name: "Brazil - Belém (BRT)", timezone: "America/Belem", searchTerms: ["brazil", "belem", "belém", "pará"] },
  { name: "Brazil - Recife (BRT)", timezone: "America/Recife", searchTerms: ["brazil", "recife", "pernambuco"] },
  { name: "Brazil - Cuiabá (AMT)", timezone: "America/Cuiaba", searchTerms: ["brazil", "cuiaba", "cuiabá", "mato grosso"] },
  { name: "Brazil - Porto Velho (AMT)", timezone: "America/Porto_Velho", searchTerms: ["brazil", "porto velho", "rondonia"] },
  { name: "Brazil - Rio Branco (ACT)", timezone: "America/Rio_Branco", searchTerms: ["brazil", "rio branco", "acre"] },
  { name: "Brazil - Fernando de Noronha", timezone: "America/Noronha", searchTerms: ["brazil", "fernando de noronha", "noronha"] },
  
  // Brunei
  { name: "Brunei", timezone: "Asia/Brunei", searchTerms: ["brunei", "bandar seri begawan"] },
  
  // Bulgaria
  { name: "Bulgaria - Sofia", timezone: "Europe/Sofia", searchTerms: ["bulgaria", "sofia"] },
  
  // Burkina Faso
  { name: "Burkina Faso - Ouagadougou", timezone: "Africa/Ouagadougou", searchTerms: ["burkina faso", "ouagadougou"] },
  
  // Burundi
  { name: "Burundi - Bujumbura", timezone: "Africa/Bujumbura", searchTerms: ["burundi", "bujumbura", "gitega"] },
  
  // Cambodia
  { name: "Cambodia - Phnom Penh", timezone: "Asia/Phnom_Penh", searchTerms: ["cambodia", "phnom penh"] },
  
  // Cameroon
  { name: "Cameroon - Douala", timezone: "Africa/Douala", searchTerms: ["cameroon", "douala", "yaounde"] },
  
  // Canada (Multiple Timezones)
  { name: "Canada - Toronto (EST)", timezone: "America/Toronto", searchTerms: ["canada", "toronto", "ontario", "ottawa"] },
  { name: "Canada - Vancouver (PST)", timezone: "America/Vancouver", searchTerms: ["canada", "vancouver", "british columbia", "bc"] },
  { name: "Canada - Calgary (MST)", timezone: "America/Edmonton", searchTerms: ["canada", "calgary", "edmonton", "alberta"] },
  { name: "Canada - Winnipeg (CST)", timezone: "America/Winnipeg", searchTerms: ["canada", "winnipeg", "manitoba"] },
  { name: "Canada - Halifax (AST)", timezone: "America/Halifax", searchTerms: ["canada", "halifax", "nova scotia", "new brunswick"] },
  { name: "Canada - St. John's (NST)", timezone: "America/St_Johns", searchTerms: ["canada", "st johns", "newfoundland", "labrador"] },
  { name: "Canada - Regina (CST)", timezone: "America/Regina", searchTerms: ["canada", "regina", "saskatchewan"] },
  { name: "Canada - Whitehorse (PST)", timezone: "America/Whitehorse", searchTerms: ["canada", "whitehorse", "yukon"] },
  { name: "Canada - Yellowknife (MST)", timezone: "America/Yellowknife", searchTerms: ["canada", "yellowknife", "northwest territories"] },
  { name: "Canada - Iqaluit (EST)", timezone: "America/Iqaluit", searchTerms: ["canada", "iqaluit", "nunavut"] },
  
  // Cape Verde
  { name: "Cape Verde - Praia", timezone: "Atlantic/Cape_Verde", searchTerms: ["cape verde", "praia", "cabo verde"] },
  
  // Central African Republic
  { name: "Central African Republic - Bangui", timezone: "Africa/Bangui", searchTerms: ["central african republic", "bangui", "car"] },
  
  // Chad
  { name: "Chad - N'Djamena", timezone: "Africa/Ndjamena", searchTerms: ["chad", "ndjamena", "n'djamena"] },
  
  // Chile
  { name: "Chile - Santiago", timezone: "America/Santiago", searchTerms: ["chile", "santiago"] },
  { name: "Chile - Punta Arenas", timezone: "America/Punta_Arenas", searchTerms: ["chile", "punta arenas", "magallanes"] },
  { name: "Chile - Easter Island", timezone: "Pacific/Easter", searchTerms: ["chile", "easter island", "rapa nui", "isla de pascua"] },
  
  // China
  { name: "China - Beijing/Shanghai", timezone: "Asia/Shanghai", searchTerms: ["china", "beijing", "shanghai", "guangzhou", "shenzhen", "hong kong"] },
  { name: "China - Urumqi (Xinjiang)", timezone: "Asia/Urumqi", searchTerms: ["china", "urumqi", "xinjiang", "ürümqi"] },
  
  // Colombia
  { name: "Colombia - Bogotá", timezone: "America/Bogota", searchTerms: ["colombia", "bogota", "bogotá", "medellin", "cali"] },
  
  // Comoros
  { name: "Comoros - Moroni", timezone: "Indian/Comoro", searchTerms: ["comoros", "moroni"] },
  
  // Congo (DRC)
  { name: "DR Congo - Kinshasa (WAT)", timezone: "Africa/Kinshasa", searchTerms: ["congo", "drc", "kinshasa", "democratic republic"] },
  { name: "DR Congo - Lubumbashi (CAT)", timezone: "Africa/Lubumbashi", searchTerms: ["congo", "drc", "lubumbashi"] },
  
  // Congo (Republic)
  { name: "Congo - Brazzaville", timezone: "Africa/Brazzaville", searchTerms: ["congo", "brazzaville", "republic of congo"] },
  
  // Costa Rica
  { name: "Costa Rica - San José", timezone: "America/Costa_Rica", searchTerms: ["costa rica", "san jose", "san josé"] },
  
  // Croatia
  { name: "Croatia - Zagreb", timezone: "Europe/Zagreb", searchTerms: ["croatia", "zagreb"] },
  
  // Cuba
  { name: "Cuba - Havana", timezone: "America/Havana", searchTerms: ["cuba", "havana", "la habana"] },
  
  // Cyprus
  { name: "Cyprus - Nicosia", timezone: "Asia/Nicosia", searchTerms: ["cyprus", "nicosia", "lefkosia"] },
  
  // Czech Republic
  { name: "Czech Republic - Prague", timezone: "Europe/Prague", searchTerms: ["czech", "czechia", "prague", "praha"] },
  
  // Denmark
  { name: "Denmark - Copenhagen", timezone: "Europe/Copenhagen", searchTerms: ["denmark", "copenhagen", "københavn"] },
  { name: "Denmark - Faroe Islands", timezone: "Atlantic/Faroe", searchTerms: ["faroe", "faroe islands", "torshavn"] },
  
  // Djibouti
  { name: "Djibouti", timezone: "Africa/Djibouti", searchTerms: ["djibouti"] },
  
  // Dominica
  { name: "Dominica - Roseau", timezone: "America/Dominica", searchTerms: ["dominica", "roseau"] },
  
  // Dominican Republic
  { name: "Dominican Republic - Santo Domingo", timezone: "America/Santo_Domingo", searchTerms: ["dominican republic", "santo domingo"] },
  
  // Ecuador
  { name: "Ecuador - Quito/Guayaquil", timezone: "America/Guayaquil", searchTerms: ["ecuador", "quito", "guayaquil"] },
  { name: "Ecuador - Galápagos", timezone: "Pacific/Galapagos", searchTerms: ["ecuador", "galapagos", "galápagos"] },
  
  // Egypt
  { name: "Egypt - Cairo", timezone: "Africa/Cairo", searchTerms: ["egypt", "cairo", "alexandria"] },
  
  // El Salvador
  { name: "El Salvador - San Salvador", timezone: "America/El_Salvador", searchTerms: ["el salvador", "san salvador"] },
  
  // Equatorial Guinea
  { name: "Equatorial Guinea - Malabo", timezone: "Africa/Malabo", searchTerms: ["equatorial guinea", "malabo"] },
  
  // Eritrea
  { name: "Eritrea - Asmara", timezone: "Africa/Asmara", searchTerms: ["eritrea", "asmara"] },
  
  // Estonia
  { name: "Estonia - Tallinn", timezone: "Europe/Tallinn", searchTerms: ["estonia", "tallinn"] },
  
  // Eswatini
  { name: "Eswatini - Mbabane", timezone: "Africa/Mbabane", searchTerms: ["eswatini", "swaziland", "mbabane"] },
  
  // Ethiopia
  { name: "Ethiopia - Addis Ababa", timezone: "Africa/Addis_Ababa", searchTerms: ["ethiopia", "addis ababa"] },
  
  // Fiji
  { name: "Fiji - Suva", timezone: "Pacific/Fiji", searchTerms: ["fiji", "suva"] },
  
  // Finland
  { name: "Finland - Helsinki", timezone: "Europe/Helsinki", searchTerms: ["finland", "helsinki"] },
  
  // France
  { name: "France - Paris", timezone: "Europe/Paris", searchTerms: ["france", "paris", "lyon", "marseille"] },
  { name: "France - Martinique", timezone: "America/Martinique", searchTerms: ["france", "martinique", "fort-de-france"] },
  { name: "France - Guadeloupe", timezone: "America/Guadeloupe", searchTerms: ["france", "guadeloupe"] },
  { name: "France - French Guiana", timezone: "America/Cayenne", searchTerms: ["france", "french guiana", "cayenne", "guyane"] },
  { name: "France - Réunion", timezone: "Indian/Reunion", searchTerms: ["france", "reunion", "réunion", "saint-denis"] },
  { name: "France - Mayotte", timezone: "Indian/Mayotte", searchTerms: ["france", "mayotte", "mamoudzou"] },
  { name: "France - Tahiti", timezone: "Pacific/Tahiti", searchTerms: ["france", "tahiti", "french polynesia", "papeete"] },
  { name: "France - New Caledonia", timezone: "Pacific/Noumea", searchTerms: ["france", "new caledonia", "noumea", "nouméa"] },
  { name: "France - Wallis and Futuna", timezone: "Pacific/Wallis", searchTerms: ["france", "wallis", "futuna"] },
  { name: "France - Saint Pierre and Miquelon", timezone: "America/Miquelon", searchTerms: ["france", "saint pierre", "miquelon"] },
  
  // Gabon
  { name: "Gabon - Libreville", timezone: "Africa/Libreville", searchTerms: ["gabon", "libreville"] },
  
  // Gambia
  { name: "Gambia - Banjul", timezone: "Africa/Banjul", searchTerms: ["gambia", "banjul"] },
  
  // Georgia
  { name: "Georgia - Tbilisi", timezone: "Asia/Tbilisi", searchTerms: ["georgia", "tbilisi"] },
  
  // Germany
  { name: "Germany - Berlin", timezone: "Europe/Berlin", searchTerms: ["germany", "berlin", "munich", "frankfurt", "hamburg", "cologne"] },
  
  // Ghana
  { name: "Ghana - Accra", timezone: "Africa/Accra", searchTerms: ["ghana", "accra"] },
  
  // Greece
  { name: "Greece - Athens", timezone: "Europe/Athens", searchTerms: ["greece", "athens", "thessaloniki"] },
  
  // Greenland
  { name: "Greenland - Nuuk", timezone: "America/Nuuk", searchTerms: ["greenland", "nuuk", "godthab"] },
  { name: "Greenland - Danmarkshavn (GMT)", timezone: "America/Danmarkshavn", searchTerms: ["greenland", "danmarkshavn"] },
  { name: "Greenland - Scoresbysund", timezone: "America/Scoresbysund", searchTerms: ["greenland", "scoresbysund", "ittoqqortoormiit"] },
  { name: "Greenland - Thule", timezone: "America/Thule", searchTerms: ["greenland", "thule", "pituffik"] },
  
  // Grenada
  { name: "Grenada - St. George's", timezone: "America/Grenada", searchTerms: ["grenada", "st george"] },
  
  // Guatemala
  { name: "Guatemala - Guatemala City", timezone: "America/Guatemala", searchTerms: ["guatemala", "guatemala city"] },
  
  // Guinea
  { name: "Guinea - Conakry", timezone: "Africa/Conakry", searchTerms: ["guinea", "conakry"] },
  
  // Guinea-Bissau
  { name: "Guinea-Bissau - Bissau", timezone: "Africa/Bissau", searchTerms: ["guinea-bissau", "bissau"] },
  
  // Guyana
  { name: "Guyana - Georgetown", timezone: "America/Guyana", searchTerms: ["guyana", "georgetown"] },
  
  // Haiti
  { name: "Haiti - Port-au-Prince", timezone: "America/Port-au-Prince", searchTerms: ["haiti", "port-au-prince"] },
  
  // Honduras
  { name: "Honduras - Tegucigalpa", timezone: "America/Tegucigalpa", searchTerms: ["honduras", "tegucigalpa"] },
  
  // Hong Kong
  { name: "Hong Kong", timezone: "Asia/Hong_Kong", searchTerms: ["hong kong", "hk"] },
  
  // Hungary
  { name: "Hungary - Budapest", timezone: "Europe/Budapest", searchTerms: ["hungary", "budapest"] },
  
  // Iceland
  { name: "Iceland - Reykjavik", timezone: "Atlantic/Reykjavik", searchTerms: ["iceland", "reykjavik"] },
  
  // India
  { name: "India - Kolkata/Delhi/Mumbai", timezone: "Asia/Kolkata", searchTerms: ["india", "kolkata", "delhi", "mumbai", "bangalore", "chennai", "hyderabad", "new delhi"] },
  
  // Indonesia (Multiple Timezones)
  { name: "Indonesia - Jakarta (WIB)", timezone: "Asia/Jakarta", searchTerms: ["indonesia", "jakarta", "java", "sumatra", "bandung"] },
  { name: "Indonesia - Makassar (WITA)", timezone: "Asia/Makassar", searchTerms: ["indonesia", "makassar", "bali", "kalimantan", "sulawesi", "denpasar"] },
  { name: "Indonesia - Jayapura (WIT)", timezone: "Asia/Jayapura", searchTerms: ["indonesia", "jayapura", "papua", "west papua"] },
  { name: "Indonesia - Pontianak (WIB)", timezone: "Asia/Pontianak", searchTerms: ["indonesia", "pontianak", "west kalimantan"] },
  
  // Iran
  { name: "Iran - Tehran", timezone: "Asia/Tehran", searchTerms: ["iran", "tehran", "isfahan", "mashhad"] },
  
  // Iraq
  { name: "Iraq - Baghdad", timezone: "Asia/Baghdad", searchTerms: ["iraq", "baghdad", "basra", "erbil"] },
  
  // Ireland
  { name: "Ireland - Dublin", timezone: "Europe/Dublin", searchTerms: ["ireland", "dublin", "cork", "galway"] },
  
  // Israel
  { name: "Israel - Jerusalem/Tel Aviv", timezone: "Asia/Jerusalem", searchTerms: ["israel", "jerusalem", "tel aviv", "haifa"] },
  
  // Italy
  { name: "Italy - Rome", timezone: "Europe/Rome", searchTerms: ["italy", "rome", "milan", "naples", "turin", "florence", "roma", "milano"] },
  
  // Ivory Coast
  { name: "Ivory Coast - Abidjan", timezone: "Africa/Abidjan", searchTerms: ["ivory coast", "cote d'ivoire", "abidjan", "yamoussoukro"] },
  
  // Jamaica
  { name: "Jamaica - Kingston", timezone: "America/Jamaica", searchTerms: ["jamaica", "kingston"] },
  
  // Japan
  { name: "Japan - Tokyo", timezone: "Asia/Tokyo", searchTerms: ["japan", "tokyo", "osaka", "kyoto", "yokohama", "nagoya"] },
  
  // Jordan
  { name: "Jordan - Amman", timezone: "Asia/Amman", searchTerms: ["jordan", "amman"] },
  
  // Kazakhstan (Multiple Timezones)
  { name: "Kazakhstan - Almaty", timezone: "Asia/Almaty", searchTerms: ["kazakhstan", "almaty", "astana", "nur-sultan"] },
  { name: "Kazakhstan - Aqtobe", timezone: "Asia/Aqtobe", searchTerms: ["kazakhstan", "aqtobe", "aktobe"] },
  { name: "Kazakhstan - Aqtau", timezone: "Asia/Aqtau", searchTerms: ["kazakhstan", "aqtau", "aktau"] },
  { name: "Kazakhstan - Atyrau", timezone: "Asia/Atyrau", searchTerms: ["kazakhstan", "atyrau"] },
  { name: "Kazakhstan - Oral", timezone: "Asia/Oral", searchTerms: ["kazakhstan", "oral", "uralsk"] },
  { name: "Kazakhstan - Qostanay", timezone: "Asia/Qostanay", searchTerms: ["kazakhstan", "qostanay", "kostanay"] },
  { name: "Kazakhstan - Qyzylorda", timezone: "Asia/Qyzylorda", searchTerms: ["kazakhstan", "qyzylorda", "kyzylorda"] },
  
  // Kenya
  { name: "Kenya - Nairobi", timezone: "Africa/Nairobi", searchTerms: ["kenya", "nairobi", "mombasa"] },
  
  // Kiribati
  { name: "Kiribati - Tarawa", timezone: "Pacific/Tarawa", searchTerms: ["kiribati", "tarawa"] },
  { name: "Kiribati - Kiritimati", timezone: "Pacific/Kiritimati", searchTerms: ["kiribati", "kiritimati", "christmas island"] },
  
  // Kuwait
  { name: "Kuwait - Kuwait City", timezone: "Asia/Kuwait", searchTerms: ["kuwait", "kuwait city"] },
  
  // Kyrgyzstan
  { name: "Kyrgyzstan - Bishkek", timezone: "Asia/Bishkek", searchTerms: ["kyrgyzstan", "bishkek"] },
  
  // Laos
  { name: "Laos - Vientiane", timezone: "Asia/Vientiane", searchTerms: ["laos", "vientiane"] },
  
  // Latvia
  { name: "Latvia - Riga", timezone: "Europe/Riga", searchTerms: ["latvia", "riga"] },
  
  // Lebanon
  { name: "Lebanon - Beirut", timezone: "Asia/Beirut", searchTerms: ["lebanon", "beirut"] },
  
  // Lesotho
  { name: "Lesotho - Maseru", timezone: "Africa/Maseru", searchTerms: ["lesotho", "maseru"] },
  
  // Liberia
  { name: "Liberia - Monrovia", timezone: "Africa/Monrovia", searchTerms: ["liberia", "monrovia"] },
  
  // Libya
  { name: "Libya - Tripoli", timezone: "Africa/Tripoli", searchTerms: ["libya", "tripoli", "benghazi"] },
  
  // Liechtenstein
  { name: "Liechtenstein - Vaduz", timezone: "Europe/Vaduz", searchTerms: ["liechtenstein", "vaduz"] },
  
  // Lithuania
  { name: "Lithuania - Vilnius", timezone: "Europe/Vilnius", searchTerms: ["lithuania", "vilnius"] },
  
  // Luxembourg
  { name: "Luxembourg", timezone: "Europe/Luxembourg", searchTerms: ["luxembourg"] },
  
  // Macau
  { name: "Macau", timezone: "Asia/Macau", searchTerms: ["macau", "macao"] },
  
  // Madagascar
  { name: "Madagascar - Antananarivo", timezone: "Indian/Antananarivo", searchTerms: ["madagascar", "antananarivo"] },
  
  // Malawi
  { name: "Malawi - Lilongwe", timezone: "Africa/Blantyre", searchTerms: ["malawi", "lilongwe", "blantyre"] },
  
  // Malaysia
  { name: "Malaysia - Kuala Lumpur", timezone: "Asia/Kuala_Lumpur", searchTerms: ["malaysia", "kuala lumpur", "kl", "penang", "johor"] },
  { name: "Malaysia - Kuching (Sarawak)", timezone: "Asia/Kuching", searchTerms: ["malaysia", "kuching", "sarawak", "sabah", "borneo"] },
  
  // Maldives
  { name: "Maldives - Malé", timezone: "Indian/Maldives", searchTerms: ["maldives", "male", "malé"] },
  
  // Mali
  { name: "Mali - Bamako", timezone: "Africa/Bamako", searchTerms: ["mali", "bamako"] },
  
  // Malta
  { name: "Malta - Valletta", timezone: "Europe/Malta", searchTerms: ["malta", "valletta"] },
  
  // Marshall Islands
  { name: "Marshall Islands - Majuro", timezone: "Pacific/Majuro", searchTerms: ["marshall islands", "majuro"] },
  { name: "Marshall Islands - Kwajalein", timezone: "Pacific/Kwajalein", searchTerms: ["marshall islands", "kwajalein"] },
  
  // Mauritania
  { name: "Mauritania - Nouakchott", timezone: "Africa/Nouakchott", searchTerms: ["mauritania", "nouakchott"] },
  
  // Mauritius
  { name: "Mauritius - Port Louis", timezone: "Indian/Mauritius", searchTerms: ["mauritius", "port louis"] },
  
  // Mexico (Multiple Timezones)
  { name: "Mexico - Mexico City (CST)", timezone: "America/Mexico_City", searchTerms: ["mexico", "mexico city", "ciudad de mexico", "guadalajara", "monterrey"] },
  { name: "Mexico - Tijuana (PST)", timezone: "America/Tijuana", searchTerms: ["mexico", "tijuana", "baja california"] },
  { name: "Mexico - Cancún (EST)", timezone: "America/Cancun", searchTerms: ["mexico", "cancun", "cancún", "quintana roo"] },
  { name: "Mexico - Chihuahua (MST)", timezone: "America/Chihuahua", searchTerms: ["mexico", "chihuahua"] },
  { name: "Mexico - Mazatlán (MST)", timezone: "America/Mazatlan", searchTerms: ["mexico", "mazatlan", "mazatlán", "sinaloa"] },
  { name: "Mexico - Hermosillo (MST)", timezone: "America/Hermosillo", searchTerms: ["mexico", "hermosillo", "sonora"] },
  
  // Micronesia
  { name: "Micronesia - Chuuk", timezone: "Pacific/Chuuk", searchTerms: ["micronesia", "chuuk", "truk"] },
  { name: "Micronesia - Pohnpei", timezone: "Pacific/Pohnpei", searchTerms: ["micronesia", "pohnpei", "ponape"] },
  { name: "Micronesia - Kosrae", timezone: "Pacific/Kosrae", searchTerms: ["micronesia", "kosrae"] },
  
  // Moldova
  { name: "Moldova - Chisinau", timezone: "Europe/Chisinau", searchTerms: ["moldova", "chisinau", "chișinău"] },
  
  // Monaco
  { name: "Monaco", timezone: "Europe/Monaco", searchTerms: ["monaco", "monte carlo"] },
  
  // Mongolia
  { name: "Mongolia - Ulaanbaatar", timezone: "Asia/Ulaanbaatar", searchTerms: ["mongolia", "ulaanbaatar", "ulan bator"] },
  { name: "Mongolia - Hovd", timezone: "Asia/Hovd", searchTerms: ["mongolia", "hovd", "khovd"] },
  { name: "Mongolia - Choibalsan", timezone: "Asia/Choibalsan", searchTerms: ["mongolia", "choibalsan"] },
  
  // Montenegro
  { name: "Montenegro - Podgorica", timezone: "Europe/Podgorica", searchTerms: ["montenegro", "podgorica"] },
  
  // Morocco
  { name: "Morocco - Casablanca", timezone: "Africa/Casablanca", searchTerms: ["morocco", "casablanca", "rabat", "marrakech", "fes"] },
  
  // Mozambique
  { name: "Mozambique - Maputo", timezone: "Africa/Maputo", searchTerms: ["mozambique", "maputo"] },
  
  // Myanmar
  { name: "Myanmar - Yangon", timezone: "Asia/Yangon", searchTerms: ["myanmar", "burma", "yangon", "rangoon", "naypyidaw"] },
  
  // Namibia
  { name: "Namibia - Windhoek", timezone: "Africa/Windhoek", searchTerms: ["namibia", "windhoek"] },
  
  // Nauru
  { name: "Nauru", timezone: "Pacific/Nauru", searchTerms: ["nauru"] },
  
  // Nepal
  { name: "Nepal - Kathmandu", timezone: "Asia/Kathmandu", searchTerms: ["nepal", "kathmandu"] },
  
  // Netherlands
  { name: "Netherlands - Amsterdam", timezone: "Europe/Amsterdam", searchTerms: ["netherlands", "holland", "amsterdam", "rotterdam", "the hague"] },
  
  // New Zealand
  { name: "New Zealand - Auckland", timezone: "Pacific/Auckland", searchTerms: ["new zealand", "auckland", "wellington", "christchurch"] },
  { name: "New Zealand - Chatham Islands", timezone: "Pacific/Chatham", searchTerms: ["new zealand", "chatham", "chatham islands"] },
  
  // Nicaragua
  { name: "Nicaragua - Managua", timezone: "America/Managua", searchTerms: ["nicaragua", "managua"] },
  
  // Niger
  { name: "Niger - Niamey", timezone: "Africa/Niamey", searchTerms: ["niger", "niamey"] },
  
  // Nigeria
  { name: "Nigeria - Lagos", timezone: "Africa/Lagos", searchTerms: ["nigeria", "lagos", "abuja", "kano", "ibadan"] },
  
  // North Korea
  { name: "North Korea - Pyongyang", timezone: "Asia/Pyongyang", searchTerms: ["north korea", "pyongyang", "dprk"] },
  
  // North Macedonia
  { name: "North Macedonia - Skopje", timezone: "Europe/Skopje", searchTerms: ["north macedonia", "macedonia", "skopje"] },
  
  // Norway
  { name: "Norway - Oslo", timezone: "Europe/Oslo", searchTerms: ["norway", "oslo", "bergen", "trondheim"] },
  
  // Oman
  { name: "Oman - Muscat", timezone: "Asia/Muscat", searchTerms: ["oman", "muscat"] },
  
  // Pakistan
  { name: "Pakistan - Karachi", timezone: "Asia/Karachi", searchTerms: ["pakistan", "karachi", "lahore", "islamabad", "rawalpindi"] },
  
  // Palau
  { name: "Palau - Koror", timezone: "Pacific/Palau", searchTerms: ["palau", "koror", "ngerulmud"] },
  
  // Palestine
  { name: "Palestine - Gaza", timezone: "Asia/Gaza", searchTerms: ["palestine", "gaza"] },
  { name: "Palestine - Hebron", timezone: "Asia/Hebron", searchTerms: ["palestine", "hebron", "west bank", "ramallah"] },
  
  // Panama
  { name: "Panama - Panama City", timezone: "America/Panama", searchTerms: ["panama", "panama city"] },
  
  // Papua New Guinea
  { name: "Papua New Guinea - Port Moresby", timezone: "Pacific/Port_Moresby", searchTerms: ["papua new guinea", "port moresby", "png"] },
  { name: "Papua New Guinea - Bougainville", timezone: "Pacific/Bougainville", searchTerms: ["papua new guinea", "bougainville"] },
  
  // Paraguay
  { name: "Paraguay - Asunción", timezone: "America/Asuncion", searchTerms: ["paraguay", "asuncion", "asunción"] },
  
  // Peru
  { name: "Peru - Lima", timezone: "America/Lima", searchTerms: ["peru", "lima", "cusco", "arequipa"] },
  
  // Philippines
  { name: "Philippines - Manila", timezone: "Asia/Manila", searchTerms: ["philippines", "manila", "cebu", "davao"] },
  
  // Poland
  { name: "Poland - Warsaw", timezone: "Europe/Warsaw", searchTerms: ["poland", "warsaw", "krakow", "gdansk"] },
  
  // Portugal
  { name: "Portugal - Lisbon", timezone: "Europe/Lisbon", searchTerms: ["portugal", "lisbon", "porto", "lisboa"] },
  { name: "Portugal - Azores", timezone: "Atlantic/Azores", searchTerms: ["portugal", "azores", "ponta delgada"] },
  { name: "Portugal - Madeira", timezone: "Atlantic/Madeira", searchTerms: ["portugal", "madeira", "funchal"] },
  
  // Qatar
  { name: "Qatar - Doha", timezone: "Asia/Qatar", searchTerms: ["qatar", "doha"] },
  
  // Romania
  { name: "Romania - Bucharest", timezone: "Europe/Bucharest", searchTerms: ["romania", "bucharest", "bucuresti", "cluj"] },
  
  // Russia (11 Timezones)
  { name: "Russia - Moscow (MSK)", timezone: "Europe/Moscow", searchTerms: ["russia", "moscow", "moskva", "st petersburg", "saint petersburg"] },
  { name: "Russia - Kaliningrad (MSK-1)", timezone: "Europe/Kaliningrad", searchTerms: ["russia", "kaliningrad"] },
  { name: "Russia - Samara (MSK+1)", timezone: "Europe/Samara", searchTerms: ["russia", "samara", "ulyanovsk"] },
  { name: "Russia - Yekaterinburg (MSK+2)", timezone: "Asia/Yekaterinburg", searchTerms: ["russia", "yekaterinburg", "ekaterinburg", "chelyabinsk", "perm"] },
  { name: "Russia - Omsk (MSK+3)", timezone: "Asia/Omsk", searchTerms: ["russia", "omsk"] },
  { name: "Russia - Novosibirsk (MSK+4)", timezone: "Asia/Novosibirsk", searchTerms: ["russia", "novosibirsk", "tomsk", "barnaul"] },
  { name: "Russia - Krasnoyarsk (MSK+4)", timezone: "Asia/Krasnoyarsk", searchTerms: ["russia", "krasnoyarsk", "kemerovo"] },
  { name: "Russia - Irkutsk (MSK+5)", timezone: "Asia/Irkutsk", searchTerms: ["russia", "irkutsk", "lake baikal"] },
  { name: "Russia - Yakutsk (MSK+6)", timezone: "Asia/Yakutsk", searchTerms: ["russia", "yakutsk", "chita"] },
  { name: "Russia - Vladivostok (MSK+7)", timezone: "Asia/Vladivostok", searchTerms: ["russia", "vladivostok", "khabarovsk"] },
  { name: "Russia - Magadan (MSK+8)", timezone: "Asia/Magadan", searchTerms: ["russia", "magadan", "sakhalin", "yuzhno-sakhalinsk"] },
  { name: "Russia - Kamchatka (MSK+9)", timezone: "Asia/Kamchatka", searchTerms: ["russia", "kamchatka", "petropavlovsk-kamchatsky"] },
  { name: "Russia - Anadyr (MSK+9)", timezone: "Asia/Anadyr", searchTerms: ["russia", "anadyr", "chukotka"] },
  
  // Rwanda
  { name: "Rwanda - Kigali", timezone: "Africa/Kigali", searchTerms: ["rwanda", "kigali"] },
  
  // Saint Kitts and Nevis
  { name: "Saint Kitts and Nevis", timezone: "America/St_Kitts", searchTerms: ["saint kitts", "nevis", "basseterre"] },
  
  // Saint Lucia
  { name: "Saint Lucia - Castries", timezone: "America/St_Lucia", searchTerms: ["saint lucia", "castries"] },
  
  // Saint Vincent and the Grenadines
  { name: "Saint Vincent and the Grenadines", timezone: "America/St_Vincent", searchTerms: ["saint vincent", "grenadines", "kingstown"] },
  
  // Samoa
  { name: "Samoa - Apia", timezone: "Pacific/Apia", searchTerms: ["samoa", "apia"] },
  
  // San Marino
  { name: "San Marino", timezone: "Europe/San_Marino", searchTerms: ["san marino"] },
  
  // São Tomé and Príncipe
  { name: "São Tomé and Príncipe", timezone: "Africa/Sao_Tome", searchTerms: ["sao tome", "principe", "são tomé"] },
  
  // Saudi Arabia
  { name: "Saudi Arabia - Riyadh", timezone: "Asia/Riyadh", searchTerms: ["saudi arabia", "riyadh", "jeddah", "mecca", "medina"] },
  
  // Senegal
  { name: "Senegal - Dakar", timezone: "Africa/Dakar", searchTerms: ["senegal", "dakar"] },
  
  // Serbia
  { name: "Serbia - Belgrade", timezone: "Europe/Belgrade", searchTerms: ["serbia", "belgrade", "beograd"] },
  
  // Seychelles
  { name: "Seychelles - Victoria", timezone: "Indian/Mahe", searchTerms: ["seychelles", "victoria", "mahe"] },
  
  // Sierra Leone
  { name: "Sierra Leone - Freetown", timezone: "Africa/Freetown", searchTerms: ["sierra leone", "freetown"] },
  
  // Singapore
  { name: "Singapore", timezone: "Asia/Singapore", searchTerms: ["singapore"] },
  
  // Slovakia
  { name: "Slovakia - Bratislava", timezone: "Europe/Bratislava", searchTerms: ["slovakia", "bratislava"] },
  
  // Slovenia
  { name: "Slovenia - Ljubljana", timezone: "Europe/Ljubljana", searchTerms: ["slovenia", "ljubljana"] },
  
  // Solomon Islands
  { name: "Solomon Islands - Honiara", timezone: "Pacific/Guadalcanal", searchTerms: ["solomon islands", "honiara", "guadalcanal"] },
  
  // Somalia
  { name: "Somalia - Mogadishu", timezone: "Africa/Mogadishu", searchTerms: ["somalia", "mogadishu"] },
  
  // South Africa
  { name: "South Africa - Johannesburg", timezone: "Africa/Johannesburg", searchTerms: ["south africa", "johannesburg", "cape town", "pretoria", "durban"] },
  
  // South Korea
  { name: "South Korea - Seoul", timezone: "Asia/Seoul", searchTerms: ["south korea", "korea", "seoul", "busan", "incheon"] },
  
  // South Sudan
  { name: "South Sudan - Juba", timezone: "Africa/Juba", searchTerms: ["south sudan", "juba"] },
  
  // Spain
  { name: "Spain - Madrid", timezone: "Europe/Madrid", searchTerms: ["spain", "madrid", "barcelona", "valencia", "seville"] },
  { name: "Spain - Canary Islands", timezone: "Atlantic/Canary", searchTerms: ["spain", "canary islands", "tenerife", "gran canaria", "las palmas"] },
  
  // Sri Lanka
  { name: "Sri Lanka - Colombo", timezone: "Asia/Colombo", searchTerms: ["sri lanka", "colombo"] },
  
  // Sudan
  { name: "Sudan - Khartoum", timezone: "Africa/Khartoum", searchTerms: ["sudan", "khartoum"] },
  
  // Suriname
  { name: "Suriname - Paramaribo", timezone: "America/Paramaribo", searchTerms: ["suriname", "paramaribo"] },
  
  // Sweden
  { name: "Sweden - Stockholm", timezone: "Europe/Stockholm", searchTerms: ["sweden", "stockholm", "gothenburg", "malmö"] },
  
  // Switzerland
  { name: "Switzerland - Zurich", timezone: "Europe/Zurich", searchTerms: ["switzerland", "zurich", "geneva", "bern", "basel", "zürich"] },
  
  // Syria
  { name: "Syria - Damascus", timezone: "Asia/Damascus", searchTerms: ["syria", "damascus", "aleppo"] },
  
  // Taiwan
  { name: "Taiwan - Taipei", timezone: "Asia/Taipei", searchTerms: ["taiwan", "taipei", "kaohsiung"] },
  
  // Tajikistan
  { name: "Tajikistan - Dushanbe", timezone: "Asia/Dushanbe", searchTerms: ["tajikistan", "dushanbe"] },
  
  // Tanzania
  { name: "Tanzania - Dar es Salaam", timezone: "Africa/Dar_es_Salaam", searchTerms: ["tanzania", "dar es salaam", "dodoma", "zanzibar"] },
  
  // Thailand
  { name: "Thailand - Bangkok", timezone: "Asia/Bangkok", searchTerms: ["thailand", "bangkok", "phuket", "chiang mai"] },
  
  // Timor-Leste
  { name: "Timor-Leste - Dili", timezone: "Asia/Dili", searchTerms: ["timor-leste", "east timor", "dili"] },
  
  // Togo
  { name: "Togo - Lomé", timezone: "Africa/Lome", searchTerms: ["togo", "lome", "lomé"] },
  
  // Tonga
  { name: "Tonga - Nukuʻalofa", timezone: "Pacific/Tongatapu", searchTerms: ["tonga", "nukualofa", "nuku'alofa"] },
  
  // Trinidad and Tobago
  { name: "Trinidad and Tobago - Port of Spain", timezone: "America/Port_of_Spain", searchTerms: ["trinidad", "tobago", "port of spain"] },
  
  // Tunisia
  { name: "Tunisia - Tunis", timezone: "Africa/Tunis", searchTerms: ["tunisia", "tunis"] },
  
  // Turkey
  { name: "Turkey - Istanbul", timezone: "Europe/Istanbul", searchTerms: ["turkey", "istanbul", "ankara", "izmir", "türkiye"] },
  
  // Turkmenistan
  { name: "Turkmenistan - Ashgabat", timezone: "Asia/Ashgabat", searchTerms: ["turkmenistan", "ashgabat", "ashkhabad"] },
  
  // Tuvalu
  { name: "Tuvalu - Funafuti", timezone: "Pacific/Funafuti", searchTerms: ["tuvalu", "funafuti"] },
  
  // Uganda
  { name: "Uganda - Kampala", timezone: "Africa/Kampala", searchTerms: ["uganda", "kampala"] },
  
  // Ukraine
  { name: "Ukraine - Kyiv", timezone: "Europe/Kyiv", searchTerms: ["ukraine", "kyiv", "kiev", "kharkiv", "odesa", "lviv"] },
  
  // United Arab Emirates
  { name: "United Arab Emirates - Dubai", timezone: "Asia/Dubai", searchTerms: ["uae", "united arab emirates", "dubai", "abu dhabi", "sharjah"] },
  
  // United Kingdom
  { name: "United Kingdom - London", timezone: "Europe/London", searchTerms: ["uk", "united kingdom", "london", "manchester", "birmingham", "england", "scotland", "wales"] },
  { name: "United Kingdom - Gibraltar", timezone: "Europe/Gibraltar", searchTerms: ["uk", "gibraltar"] },
  
  // United States (Multiple Timezones)
  { name: "USA - New York (EST)", timezone: "America/New_York", searchTerms: ["usa", "united states", "new york", "boston", "philadelphia", "washington dc", "miami", "atlanta"] },
  { name: "USA - Chicago (CST)", timezone: "America/Chicago", searchTerms: ["usa", "united states", "chicago", "dallas", "houston", "austin", "minneapolis", "st louis"] },
  { name: "USA - Denver (MST)", timezone: "America/Denver", searchTerms: ["usa", "united states", "denver", "colorado", "salt lake city", "albuquerque"] },
  { name: "USA - Phoenix (MST)", timezone: "America/Phoenix", searchTerms: ["usa", "united states", "phoenix", "arizona"] },
  { name: "USA - Los Angeles (PST)", timezone: "America/Los_Angeles", searchTerms: ["usa", "united states", "los angeles", "san francisco", "seattle", "san diego", "las vegas", "california"] },
  { name: "USA - Anchorage (AKST)", timezone: "America/Anchorage", searchTerms: ["usa", "united states", "anchorage", "alaska"] },
  { name: "USA - Honolulu (HST)", timezone: "Pacific/Honolulu", searchTerms: ["usa", "united states", "honolulu", "hawaii"] },
  { name: "USA - Juneau (AKST)", timezone: "America/Juneau", searchTerms: ["usa", "united states", "juneau"] },
  { name: "USA - Adak (HST)", timezone: "America/Adak", searchTerms: ["usa", "united states", "adak", "aleutian"] },
  { name: "USA - Detroit (EST)", timezone: "America/Detroit", searchTerms: ["usa", "united states", "detroit", "michigan"] },
  { name: "USA - Indianapolis (EST)", timezone: "America/Indiana/Indianapolis", searchTerms: ["usa", "united states", "indianapolis", "indiana"] },
  
  // Uruguay
  { name: "Uruguay - Montevideo", timezone: "America/Montevideo", searchTerms: ["uruguay", "montevideo"] },
  
  // Uzbekistan
  { name: "Uzbekistan - Tashkent", timezone: "Asia/Tashkent", searchTerms: ["uzbekistan", "tashkent", "samarkand"] },
  { name: "Uzbekistan - Samarkand", timezone: "Asia/Samarkand", searchTerms: ["uzbekistan", "samarkand", "bukhara"] },
  
  // Vanuatu
  { name: "Vanuatu - Port Vila", timezone: "Pacific/Efate", searchTerms: ["vanuatu", "port vila", "efate"] },
  
  // Vatican City
  { name: "Vatican City", timezone: "Europe/Vatican", searchTerms: ["vatican", "vatican city", "holy see"] },
  
  // Venezuela
  { name: "Venezuela - Caracas", timezone: "America/Caracas", searchTerms: ["venezuela", "caracas", "maracaibo"] },
  
  // Vietnam
  { name: "Vietnam - Ho Chi Minh City", timezone: "Asia/Ho_Chi_Minh", searchTerms: ["vietnam", "ho chi minh", "saigon", "hanoi", "da nang"] },
  
  // Yemen
  { name: "Yemen - Sana'a", timezone: "Asia/Aden", searchTerms: ["yemen", "sanaa", "sana'a", "aden"] },
  
  // Zambia
  { name: "Zambia - Lusaka", timezone: "Africa/Lusaka", searchTerms: ["zambia", "lusaka"] },
  
  // Zimbabwe
  { name: "Zimbabwe - Harare", timezone: "Africa/Harare", searchTerms: ["zimbabwe", "harare"] },
];
