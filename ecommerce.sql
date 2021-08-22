-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2021 at 04:38 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `add_by_user` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `description`, `created_at`, `updated_at`, `add_by_user`) VALUES
(2, 'Vicodin', '156', 'Vicodin is a popular drug for treating acute or chronic moderate to moderately severe pain. Its most common side effects are lightheadedness, dizziness, sedation, nausea, and vomiting. Vicodin can reduce breathing, impair thinking, reduce physical abilities, and is habit forming.', '2021-08-20 20:19:24', '2021-08-20 20:19:24', 'abc@gmail.com'),
(3, ' Simvastatin (Generic for Zocor)', '985', 'Simvastatin is one of the first \"statins\" (HMG-CoA reductase inhibitors) approved for treating high cholesterol and reducing the risk of stroke, death from heart disease, and risk of heart attacks. Its most common side effects are headache, nausea, vomiting, diarrhea, abdominal pain, and muscle pain. Like other statins it can cause muscle break down.', '2021-08-20 20:20:03', '2021-08-20 20:20:03', 'abc@gmail.com'),
(4, ' Lisinopril (Generic for Prinivil or Zestril)', '550', 'Lisinopril is an angiotensin converting enzyme (ACE) inhibitor used for treating high blood pressure, congestive heart failure, and for preventing kidney failure caused by high blood pressure and diabetes. Lisinopril side effects include dizziness, nausea, headaches, drowsiness, and sexual dysfunction. ACE inhibitors may cause a dry cough that resolves when the drug is discontinued.', '2021-08-20 20:20:28', '2021-08-20 20:20:28', 'abc@gmail.com'),
(5, 'Levothyroxine (generic for Synthroid)', '201', 'Levothryoxine is a man-made version of thyroid hormone. It is used for treating hypothyroidism. Its side effects are usually result from high levels of thyroid hormone. Excessive thyroid hormone can cause chest pain, increased heart rate, excessive sweating, heat intolerance, nervousness, headache, and weight loss.', '2021-08-20 20:20:53', '2021-08-20 20:20:53', 'abc@gmail.com'),
(6, 'Azithromycin ', '845', 'Azithromycin is an antibiotic used for treating ear, throat, and sinus infections as well as pneumonia, bronchitis, and some sexually transmitted diseases. Its common side effects include loose stools, nausea, stomach pain, and vomiting. Rare side effects include abnormal liver tests, allergic reactions, nervousness, and abnormal heart beats.', '2021-08-20 20:21:14', '2021-08-20 20:21:14', 'abc@gmail.com'),
(7, 'Metformin', '981', 'Metformin is used alone or in combination with other drugs for treating type 2 diabetes in adults and children.  The most common side effects of metformin are nausea, vomiting, gas, bloating, diarrhea, and loss of appetite.', '2021-08-20 20:21:32', '2021-08-20 20:21:32', 'abc@gmail.com'),
(8, ' Lipitor (atorvastatin)', '524', 'Lipitor is a \"statin\" (HMG-CoA reductase inhibitors) approved for treating high cholesterol. It also prevents chest pain, stroke, heart attack in individuals with coronary artery disease. It causes minor side effects such as constipation, diarrhea, fatigue, gas, heartburn, and headache. Like other statins it can cause muscle pain and muscle break down.', '2021-08-20 20:21:51', '2021-08-20 20:21:51', 'abc@gmail.com'),
(9, 'Amlodipine (generic for Norvasc)', '254', 'Amlodipine is a calcium channel blocker used for treating high blood pressure and for treatment and prevention of chest pain. Its most common side effects are headache and swelling of the lower extremities. Amlodipine can also cause dizziness, flushing, fatigue, nausea, and palpitations.', '2021-08-20 20:22:25', '2021-08-20 20:22:25', 'abc@gmail.com'),
(10, 'Amoxicillin', '435', 'Amoxicillin is a penicillin type antibiotic used for treating several types of bacterial infections such as ear, tonsils, throat, larynx, urinary tract, and skin infections. Its side effects are diarrhea, heartburn, nausea, itching, vomiting, confusion, abdominal pain, rash, and allergic reactions.', '2021-08-20 20:22:42', '2021-08-20 20:22:42', 'abc@gmail.com'),
(11, 'Hydrochlorothiazide', '350', 'Hydrochlorothiazide is a diuretic (water pill) used alone or combined with other drugs for treating high blood pressure. Its side effects include weakness, low blood pressure, light sensitivity, impotence, nausea, abdominal pain, electrolyte disturbances, and rash.', '2021-08-20 20:23:30', '2021-08-20 20:23:30', 'abc@gmail.com'),
(12, 'Vitamin D 50,000 IU', '245', 'Vitamin D has long been known to boost the ability of our immune systems to resist bacteria and viruses—a fact that may have led to an increased use of it in 2020. People get vitamin D through sun exposure, food, and/or supplements. However, more than 40% of Americans are estimated to have a vitamin D deficiency.\n\nWhile many people take over-the-counter vitamin D supplements, some people are prescribed higher doses for “hypoparathyroidism, a condition that causes calcium deficiency, weakness, fatigue and muscle cramp and spasms,” Dr. Luykanovsky says. “It’s also prescribed for osteomalacia, a condition where there’s depletion of calcium from the bone.”\n\nVitamin D is also useful in treating inflammatory diseases like Crohn’s and Celiac. “You should have your vitamin D level tested regularly, especially if you have a chronic condition,” she explains.', '2021-08-20 20:26:16', '2021-08-20 20:26:16', 'abc@gmail.com'),
(13, 'Ibuprofen 800 mg', '256', 'Well-known by its brand names, like Motrin, ibuprofen is a non-steroidal anti-inflammatory drug (NSAID) prescribed mainly to “decrease temperature and treat inflammation or pain and inflammation caused by many conditions such as arthritis, headache, toothache, back pain and more,” Dr. Luykanovsky says. \n\nThe difference between the over-the-counter version and the prescribed version is only in the dosage. OTC ibuprofen only goes up to 200 mg per tablet versus 800 mg for Rx strength. Most people have no issues with taking ibuprofen; the biggest complaint is typically an upset stomach. In rare cases, some people experience an ulcer, stomach bleeding, or a cardiovascular event after taking NSAIDs, but most people have no issues.\n\n“Make sure you eat before taking ibuprofen,” Dr. Luykanovsky advises. Taking ibuprofen on a full stomach can decrease the likelihood of side effects. When taken correctly, it’s effective and has few side effects, making it a top choice for inflammation and pain relief.', '2021-08-20 20:27:24', '2021-08-20 20:27:24', 'abc@gmail.com'),
(14, 'Cetirizine hydrochloride 10 mg', '254', 'More than 50 million people in the U.S. experience allergies every year, according to the Asthma and Allergy Foundation of America. Cetirizine hydrochloride is an antihistamine that’s mainly used to treat the symptoms that allergies cause like sneezing, coughing, watery eyes, and hives. It’s available over the counter, as well, but when you have an Rx you can take advantage of SingleCare savings. \n\nRELATED: Can I use SingleCare for over-the-counter medications?\n\nMany physicians recommend cetirizine over other allergy medications, like Benadryl, that can cause severe drowsiness. Just be sure to see how it affects you before driving or operating any heavy machinery. “It can impair your reactions and can cause sleepiness,” Dr. Luykanovsky explains. “And be careful if you add it on top of other drowsy medications.”', '2021-08-20 20:27:44', '2021-08-20 20:27:44', 'abc@gmail.com'),
(15, 'Azithromycin 250 mg', '234', 'Azithromycin, an antibiotic commonly known as Z-pak, that treats respiratory and skin infections—and even some sexually transmitted diseases. The drug’s popularity in 2020 may be because “it made some noise this year being used during the first COVID-19 months as a combination or solo treatment for symptomatic patients,” Dr. Luykanovsky explains.\n\nIf you have a liver condition, it’s important to let your doctor know before taking azithromycin because in some rare cases it can cause liver damage.', '2021-08-20 20:28:58', '2021-08-20 20:28:58', 'abc@gmail.com'),
(16, 'Amlodipine besylate 10 mg', '344', 'This calcium channel blocker is mostly prescribed for high blood pressure (hypertension), and works by relaxing and widening blood vessels. “Most people tolerate amlodipine with minimal side effects,” says Karen Kier, Ph.D., a professor of pharmacy practice at Raabe College of Pharmacy at Ohio Northern University. “It can also be used in combination with other drugs for high blood pressure to reach blood pressure goals.”\n\nHigh blood pressure is very common in the United States, impacting about 45% of adults, according to the Centers for Disease Control and Prevention (CDC). Of those, about 51% take medication to treat their high blood pressure.\n\nRELATED: Heart disease statistics', '2021-08-20 20:29:17', '2021-08-20 20:29:17', 'abc@gmail.com'),
(17, 'Albuterol sulfate HFA 90 mcg/act', '254', 'With nearly 25 million adults and children with asthma in the U.S., it’s not a surprise that this medication is commonly prescribed. Albuterol sulfate is typically administered by inhaler and is meant to act quickly (it’s also referred to as a “rescue inhaler”) to help people with breathing problems like asthma and chronic obstructive pulmonary disease (COPD). “It works rapidly to open airways to improve breathing and reduce shortness of breath and wheezing,” Kier explains.\n\nInhalers for these conditions can be very expensive, but the FDA approved the first generic for Proventil HFA in 2020. Or, you can use a SingleCare coupon to reduce the price on either the brand or generic inhaler.', '2021-08-20 20:29:38', '2021-08-20 20:29:38', 'abc@gmail.com'),
(18, 'Cyclobenzaprine hydrochloride 10 mg ', '980', 'Cyclobenzaprine hydrochloride is a muscle relaxant used to control spasms. It’s been available for over 40 years in the United States. The drug is not meant to be used long-term, but is often prescribed for people who have back injuries or muscle strains and works best when combined with rest and/or physical therapy.\n\nCyclobenzaprine can cause some side effects like drowsiness, dry mouth, and dizziness. ', '2021-08-20 20:30:06', '2021-08-20 20:30:06', 'abc@gmail.com'),
(19, 'Cephalexin 500 mg', '254', 'Cephalexin is a cephalosporin antibiotic used for common outpatient bacterial infections like those in the lung, skin, ear, bone and urinary tract. When used to manage short-term infections, most people tolerate the drug well, Kier says. Like any other antibiotic, cephalexin doesn’t work on viral infections like the cold or flu. ', '2021-08-20 20:30:22', '2021-08-20 20:30:22', 'abc@gmail.com'),
(20, 'Hydrochlorothiazide 25 mg', '2131', 'Hydrochlorothiazide is a diuretic, aka water pill, used to manage high blood pressure. The medication works by causing people who take it to urinate more often, which helps the body get rid of excess salt and water. Hydrochlorothiazide can also be used to treat edema (fluid retention) that can be caused by a number of medical problems including heart, liver and kidney disease.\n\nHydrochlorothiazide has been used for more than 40 years and is considered very safe. “This is an effective drug and it’s also considered a first-line medication for blood pressure by the American College of Cardiology national guidelines,” Kier says. ', '2021-08-20 20:30:37', '2021-08-20 20:30:37', 'abc@gmail.com'),
(21, 'Cetirizine hydrochloride 10 mg', '2541', 'Amoxicillin, a penicillin antibiotic, topped the list as the most common prescription filled by SingleCard card users in 2020. This powerhouse drug is used to treat a host of common bacterial infections like pneumonia, tonsillitis, and ear, nose, throat, skin, or urinary tract infections.\n\n“It is also used for H. Pylori infection in combination with clarithromycin,” says Inna Lukyanovsky, Pharm.D., a New Jersey-based expert in gut and hormone health. H. Pylori is a bacterial infection in the stomach. In other words, its popularity is no surprise, based on sheerly the number of ailments it can cure.\n\nSee your doctor for a proper diagnosis. A viral infection won’t respond to amoxicillin, but a bacterial one will—and only your healthcare provider can know the difference. Avoiding unnecessary antibiotics can help avoid antibiotic resistance.“We’re finding more and more resistance with amoxicillin these days,” Dr. Lukyanovsky says.', '2021-08-20 20:31:27', '2021-08-20 20:31:27', 'abc@gmail.com'),
(22, 'Paracetamol', '150', 'Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature. It\'s available combined with other painkillers and anti-sickness medicines. It\'s also an ingredient in a wide range of cold and flu remedies. Paracetamol takes up to an hour to work.\nThe usual dose of paracetamol is one or two 500mg tablets at a time. Do not take paracetamol with other medicines containing paracetamol. Paracetamol is safe to take in pregnancy and while breastfeeding, at recommended doses. Brand names include Disprol, Hedex, Medinol and Panadol. Most people can take paracetamol safely, including pregnant and breastfeeding women. However, some people need to take extra care with paracetamol. Paracetamol can be taken with or without food. The usual dose for adults is one or two 500mg tablets up to 4 times in 24 hours. Always leave at least 4 hours between doses. Overdosing on paracetamol can cause serious side effects. Do not be tempted to increase the dose or to take a double dose if your pain is very bad.', '2021-08-22 10:31:57', '2021-08-22 10:31:57', 'antik@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` varchar(150) NOT NULL,
  `password` text NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `password`, `name`) VALUES
('abc@gmail.com', 'sha256$ByVRYeG1ukkhqFnA$68ba0a8f0a731bb56a8c86ee01fc4177500be5cd89bd62d93129c64fdefc95f6', 'Avijit Samanta'),
('antik@gmail.com', 'sha256$2u9x95uqSrf1rUqG$65dc7373dbe934dd6efa4fd1c7e59c08a6d32aed3224809f95cdb22d511f00dd', 'Antik Mondal');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
