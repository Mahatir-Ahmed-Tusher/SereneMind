import React from 'react';
import { Book, Film, Youtube } from 'lucide-react';

const Resources = () => {
  const books = [
    {
      title: "ইট দ্যাট ফ্রগ",
      author: "ব্রায়ান স্টেসি",
      description: "ব্রায়ান ট্রেসির ইট দ্যাট ফ্রগ! তথা সবচেয়ে কঠিন কাজ দিয়ে আরম্ভ করুন-এ বইয়ের ইংরেজি তৃতীয় সংস্করণে দ্বিতীয় সংস্করণের কিছু অনুচ্ছেদ বাদ দিয়ে এবং নতুন কিছু অনুচ্ছেদ যোগ করে প্রকাশ করা হয়েছে। আমরা পাঠকের সুবিধার্থে উভয় সংস্করণের সব অনুচ্ছেদ সংগ্রহ করে এখানে যুক্ত করে দিয়েছি। আশা করি, পাঠক গুরুত্বপূর্ণ কোন বক্তব্য থেকে বঞ্চিত হবেন না।মার্ক টোয়েন একদা বলেছিলেন, ‘যদি প্রতিদিন সকালে একটি জীবন্ত ব্যাঙ খাওয়ার মাধ্যমে কারও দিনের সূচনা হয়, তাহলে দিনের বাকি সময়টায় তার মনে এমন সন্তুষ্টি বিরাজ করবে যে, এর তুলনায় খারাপ অভিজ্ঞতার সম্মুখীন তাকে হতে হবে না।’ টোয়েন এর মাধ্যমে বোঝাতে চেয়েছেন, প্রতিদিনের শুরু করুন সবচেয়ে কঠিন কাজ দিয়ে। আপনি যদি দিনের শুরুতেই কঠিন কাজ দিয়ে আরম্ভ করেন এবং তা সম্পন্ন করেন, তবে সারাদিন এই সন্তুষ্টি নিয়ে কাটাবেন যে এরচেয়ে কঠিন কাজ আর কিছু হতে পারে না। নিজের মধ্যে কঠিন কাজ সম্পন্ন করার শক্তি ও সাহস বিরাজ করবে। আত্মবিশ্বাস বৃদ্ধি পাবে। ব্রায়ান ট্রেসির এ বই মূলত গড়িমসি অভ্যাস ত্যাগ করা এবং অল্প সময়ে আরও বেশি কাজ দক্ষভাবে সম্পন্ন করার কলাকৌশল নিয়ে লেখা হয়েছে। এখানে ২১টি বাস্তবসম্মত উপায় নিয়ে সাবলীল ও সহজভাবে আলোচনা করা হয়েছে। ব্যক্তিগতভাবে আমি নিজে এসব উপায়, সূত্র ও নীতি কাজে লাগিয়ে উপকৃত হয়েছি। তাই এসব উপায়, সূত্র ও নীতি পাঠকদের উপকারার্থে প্রকাশের উদ্যোগ গ্রহণ করেছি। আমরা পাঠকের সাফল্য যাত্রায় সারথি হতে এই সামান্য অবদান রাখতে পেরে আনন্দিত। পাঠকের জীবন সমৃদ্ধ হোক।",
      link: "https://www.banglabookshelf.com/Story%20Books/Education/Motivational-Books/1/Eat%20That%20Frog%20by%20Brian%20Tracy.pdf",
      image: "https://i.postimg.cc/sD9w2jkk/image.png" 
    },
    {
      title: "Maybe You Should Talk to Someone",
      author:  "Lori Gottlieb",
      description: "One day, Lori Gottlieb is a therapist who helps patients in her Los Angeles practice. The next, a crisis causes her world to come crashing down. Enter Wendell, the quirky but seasoned therapist in whose of­fice she suddenly lands. With his balding head, cardigan, and khakis, he seems to have come straight from Therapist Central Casting. Yet he will turn out to be anything but. As Gottlieb explores the inner chambers of her patients' lives -- a self-absorbed Hollywood producer, a young newlywed diagnosed with a terminal illness, a senior citizen threatening to end her life on her birthday if nothing gets better, and a twenty-something who can't stop hooking up with the wrong guys -- she finds that the questions they are struggling with are the very ones she is now bringing to Wendell. With startling wisdom and humor, Gottlieb invites us into her world as both clinician and patient, examining the truths and fictions we tell ourselves and others as we teeter on the tightrope between love and desire, meaning and mortality, guilt and redemption, terror and courage, hope and change. Maybe You Should Talk to Someone is rev­olutionary in its candor, offering a deeply per­sonal yet universal tour of our hearts and minds and providing the rarest of gifts: a boldly reveal­ing portrait of what it means to be human, and a disarmingly funny and illuminating account of our own mysterious lives and our power to transform them.",
      link:"https://pdfcoffee.com/download/maybe-you-should-talk-to-someone-a-therapist-her-therapist-and-our-lives-revealed-by-lori-gottlieb-pdf-free.html",
      image: "https://i.postimg.cc/wTYZjTvz/image.png"
    },
     {
      title: "দ্যা মিরাকল মর্নিং",
      author: "হ্যাল এরলড",
      description: "যারা প্রতিকূল অবস্থার মধ্যে রয়েছেন, সংগ্রামের সময় অতিক্রম করছেন; হোক সে সংগ্রাম মানসিক, আবেগজনিত, শারীরিক, আর্থিক কিংবা সম্পর্ককেন্দ্রিক- একটি জিনিস বারবার প্রমাণিত হয়েছে, The Miracle Morning যে কাউকে অবতিক্রম্য চ্যালেঞ্জসমূহ মোকাবেলায় শক্তিমান করে তুলবে, যুগান্তকারী পরিবর্তনের মাধ্যমে বিরাট সফলতা এনে দেবে এবং পরিস্থিতি পাল্টে দেবে। আর প্রায়ই এসব ঘটবে খুব সংক্ষিপ্ত সময়ে।যাদের জীবনের চাওয়া-পাওয়া বড়, তাদের জন্য The Miracle Morning একটি পরিপূর্ণ Game Changer যা আপনাকে অধরা পরবর্তী লক্ষ্য অর্জনের দিকে নিয়ে যাবে, আপনার ব্যক্তিগত ও পেশাগত সফলতা অতীতের সব অর্জনকে ছাড়িয়ে যাবে।",
      link: "https://www.banglabookshelf.com/Story%20Books/Education/Motivational-Books/1/%E0%A6%A6%E0%A7%8D%E0%A6%AF%20%E0%A6%AE%E0%A6%BF%E0%A6%B0%E0%A6%BE%E0%A6%95%E0%A6%B2%20%E0%A6%AE%E0%A6%B0%E0%A7%8D%E0%A6%A8%E0%A6%BF%E0%A6%82.pdf",
      image: "https://i.postimg.cc/rFnRj7xd/image.png" 
    },
    {
      title: "দ্য ওয়ান মিনিট ম্যানেজার",
      author: "কেন ব্লানচার্ড",
      description: "দ্য ওয়ান মিনিট ম্যানেজার কেন ব্লানচার্ড এবং স্পেন্সার জনসনের একটি ছোট বই। সংক্ষিপ্ত ভলিউম একটি গল্প বলে, একজন কার্যকর ব্যবস্থাপকের তিনটি কৌশল বর্ণনা করে : এক মিনিটের গোল, এক মিনিটের প্রশংসা এবং এক মিনিটের তিরস্কার । এগুলির প্রতিটিতে মাত্র এক মিনিট সময় লাগে তবে এটি দীর্ঘস্থায়ী সুবিধার জন্য কথিত। প্রকাশের পরই বইটি নিউ ইয়র্ক টাইমসের বেস্টসেলার হয়ে ওঠে। দ্য ওয়ান মিনিট ম্যানেজার 15 মিলিয়ন কপি বিক্রি করেছে এবং 47টি ভাষায় অনূদিত হয়েছে।",
      link: "https://example.com/book2",
      image: "https://i.postimg.cc/0jtjtJMg/image.png"
    },
    {
      title: "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
      author: "Bessel van der Kolk M.D",
      description: "Trauma is a fact of life. Veterans and their families deal with the painful aftermath of combat; one in five Americans has been molested; one in four grew up with alcoholics; one in three couples have engaged in physical violence. Dr. Bessel van der Kolk, one of the world’s foremost experts on trauma, has spent over three decades working with survivors. In The Body Keeps the Score, he uses recent scientific advances to show how trauma literally reshapes both body and brain, compromising sufferers’ capacities for pleasure, engagement, self-control, and trust. He explores innovative treatments—from neurofeedback and meditation to sports, drama, and yoga—that offer new paths to recovery by activating the brain’s natural neuroplasticity. Based on Dr. van der Kolk’s own research and that of other leading specialists, The Body Keeps the Score exposes the tremendous power of our relationships both to hurt and to heal—and offers new hope for reclaiming lives.",
      link: "https://pdfdrive.com.co/the-body-keeps-the-score-pdf/",
      image: "https://i.postimg.cc/g0PzHKSX/image.png"
    },
    {
      title: "প্যারাময় লাইফের প্যারাসিটামল",
      author: "ঝংকার মাহবুব",
      description: "আমাদের তরুণ প্রজন্মের একটা বড়ো অংশই কোনো না কোনো কারণে একটা সময় হতাশ হয়ে পড়ে। কী করা উচিৎ, কীভাবে করা উচিৎ এই বিষয়গুলো নিয়ে তারা সিদ্ধান্তহীনতায় ভুগে। আর এই সিদ্ধান্তহীনতা থেকে আসে হতাশা, হতাশা থেকে জন্ম নেয় অনীহা, আর অনীহা থেকে ব্যর্থতা, আর এই ব্যর্থতা থেকে আবার আসে হতাশা। ব্যর্থতা আর হতাশার এই দুষ্টচক্রের আবর্তন থেকে বেরুতে আমাদের কী করা উচিৎ! আমাদের প্যারাময় লাইফে করণীয় নিয়ে ঝংকার মাহবুব লিখেছেন তাঁর অন্যান্য বইয়ের মতো চমৎকার আরেকটি বই প্যারাময় লাইফের প্যারাসিটামল। বইটিতে রয়েছে দারুণ সব টুলস, যেগুলো নিজেকে যাচাই করার জন্য অনন্য সহায়ক হবে। এই বইটিতে আছে সারাদিন কীভাবে কাটাবো তার ঘণ্টাওয়ারি নকশা, জীবনটা গঠনমূলক কাজে ব্যয় হচ্ছে কীনা তার হিসাব, এরকম আরও অনেক চমকপ্রদ বিষয়।",
      link: "https://www.banglabookshelf.com/Story%20Books/Education/Motivational-Books/1/Peramoy%20Life-er%20Paracetamol%20By%20Jhankar%20Mahbub.pdf",
      image: "https://i.postimg.cc/wvvSXypR/image.png"
    },
    {
      title: "The Bell Jar",
      author: "Sylvia Plath",
      description: "The Bell Jar chronicles the crack-up of Esther Greenwood: brilliant, beautiful, enormously talented, and successful, but slowly going under maybe for the last time. Sylvia Plath masterfully draws the reader into Esther's breakdown with such intensity that Esther's insanity becomes completely real and even rational, as probable and accessible an experience as going to the movies. Such deep penetration into the dark and harrowing corners of the psyche is an extraordinary accomplishment and has made The Bell Jar a haunting American classic",
      link: "https://www.fadedpage.com/link.php?file=20160540-a5.pdf",
      image: "https://i.postimg.cc/KvjqzS5Q/image.png"
    },
    {
      title: "Turtles All the Way Down",
      author: "John Green",
      description: "The story centers on 16 year old Aza Holmes, an American high school student with OCD and anxiety, and her search for a fugitive billionaire who happens to be a neighbor's father. She is grieving the loss of her own father while a budding relationship grows between her and the billionaire's son. Additionally, the novel explores Aza's relationship with her best friend, Daisy. The only other details of the plot revealed to the public before release were that it was to contain, either literally or figuratively, a tuatara, Star Wars fan fiction, an unexpected reunion, friendship, and values of life.Speaking about the novel, Green stated: 'This is my first attempt to write directly about the kind of mental illness that has affected my life since childhood, so while the story is fictional, it is also quite personal'.",
      link: "http://nadasiling.weebly.com/uploads/3/8/1/8/3818639/an_tekmovanje_knjiga.pdf",
      image: "https://i.postimg.cc/G2NBxyZ4/image.png"
    },
  
  {
      title: "The Anxious Generation",
      author: "Jonathan Haidt",
      description: "After more than a decade of stability or improvement, the mental health of adolescents plunged in the early 2010s. Rates of depression, anxiety, self-harm, and suicide rose sharply, more than doubling on many measures. Why? In The Anxious Generation, social psychologist Jonathan Haidt lays out the facts about the epidemic of teen mental illness that hit many countries at the same time. He then investigates the nature of childhood, including why children need play and independent exploration to mature into competent, thriving adults. Haidt shows how the “play-based childhood” began to decline in the 1980s, and how it was finally wiped out by the arrival of the “phone-based childhood” in the early 2010s. He presents more than a dozen mechanisms by which this “great rewiring of childhood” has interfered with children’s social and neurological development, covering everything from sleep deprivation to attention fragmentation, addiction, loneliness, social contagion, social comparison, and perfectionism. He explains why social media damages girls more than boys and why boys have been withdrawing from the real world into the virtual world, with disastrous consequences for themselves, their families, and their societies. Most important, Haidt issues a clear call to action. He diagnoses the “collective action problems” that trap us, and then proposes four simple rules that might set us free. He describes steps that parents, teachers, schools, tech companies, and governments can take to end the epidemic of mental illness and restore a more humane childhood. Haidt has spent his career speaking truth backed by data in the most difficult landscapes—communities polarized by politics and religion, campuses battling culture wars, and now the public health emergency faced by Gen Z. We cannot afford to ignore his findings about protecting our children—and ourselves—from the psychological damage of a phone-based life.",
      link: "https://cdn.penguin.co.uk/dam-assets/books/9780241647660/9780241647660-sample.pdf", 
      image: "https://i.postimg.cc/Qxn7qVTG/image.png"
    },
{
      title: "না বলতে শিখুন",
      author: "রেনু সরন",
      description: "না’ বলাটা যদি আপনার কাছে কঠিন কাজ হয় তবে বেশিরভাগ সময়ে অন্যের ইচ্ছামতো আপনাকে এমন কাজ করতে হবে না যা আপনি মন থেকে করতে চান না। এ প্রক্রিয়া যদি ক্রমাগত চলতেই থাকে তবে যেকোনো ব্যক্তির মনে হতাশার সৃষ্টি হতে পারে, যার ফলে বন্ধুত্বের সম্পর্ক বা যেকোনো সম্পর্ক তিক্ত হয়ে উঠতে পারে । আপনি যখন ‘না’ বলতে সংকোচ বোধ করবেন তখন চারদিকে এমন পরিস্থিতির সৃষ্টি হবে যে আপনার চতুর্দিকে পানি পড়ছে অথচ আপনি কল বন্ধ করতে পারছেন না। যদি কারো অনুরোধের জবাবে আপনি না বলতে চান অথচ ‘না’-এর পরিবর্তে যদি আপনার মুখ থেকে ‘হ্যাঁ’ বেরিয়ে যায় তবে আপনার ভেতরে একটা চাপ ক্ষোভের ভাব জমবে এবং সেই ক্ষোভ উত্তরোত্তর বৃদ্ধি পাবে। এতে আপনার শরীরের ওপরও বিপরীত প্রভাব পড়তে পারে এবং সর্বপ্রথম মাথার যন্ত্রণা রূপে সেই প্রতিক্রিয়া ব্যক্ত হবে। ‘না’ বলার অর্থ হলো পানি নির্গত কলের মুখ বন্ধ করে দেয়া এবং বাহিরের চাপের ধারা বন্ধ করে দেয়া। আপনি কী করবেন তা নির্ণয় করার ক্ষমতা আপনার নিজের হাতেই আছে এবং এতে করে আপনার সময় ও জীবনের ওপর নিয়ন্ত্রণ বজায় থাকে। সরাসরি না বলতে পারলে তার ভেতর থেকে আপনার আত্মবিশ্বাস প্রকাশিত হয় । যেসব ব্যক্তি না বলতে সংকোচ বোধ করে তাদের মনে বিভিন্ন ধারণার সৃষ্টি হয়। তারা জানে যে ভালো লোকদের কর্তব্যই হলো অপরের কাজ করা, না বলার মানে হলো স্বার্থপরতা, লোকেরা তাদের কাছে খুবই গুরুত্বপূর্ণ, তাই কখনই না বলা উচিত নয়, যদি আমি না বলি তবে অন্যরা আহত, মনঃক্ষত হবে এবং অপমানিত বোধ করবে ও আমাকে পছন্দ করবে না। যদি আপনার মনে এমন ধারণা থেকে থাকে তবে শিগগিরই তা বদলানো প্রয়োজন, তা না হলে আপনার বেঁচে থাকা সংকটময় হয়ে উঠতে পারে।",
      link: "https://www.banglabookshelf.com/Story%20Books/Education/Motivational-Books/1/%E0%A6%A8%E0%A6%BE%20%E0%A6%AC%E0%A6%B2%E0%A6%A4%E0%A7%87%20%E0%A6%B6%E0%A6%BF%E0%A6%96%E0%A7%81%E0%A6%A8.pdf", 
      image: "https://i.postimg.cc/NfJg9HrT/image.png"
    }
   
  ];

  const movies = [
    {
      title: "মনপুরা",
      year: 2009,
      description: "বাংলাদেশের দক্ষিণাঞ্চলে একটি চরের নাম মনপুরা। চারপাশে নদী। দূরে বসতিপূর্ণ গ্রামগুলো দেখা যায়। জনমানবশূন্য চর মনপুরা। সেখানে বাস করে অন্যের খুনের দায় মাথায় নেয়া এক যুবক সোনাই। দূর গ্রাম উজানতলীর হাবিব আলীর মা-মরা মেয়ে পরী বাপের সাথে মনপুরায় মাছ ধরতে এসে সোনাইর প্রেমে পড়ে। কিন্তু মনপুরা চরের মালিক গাজীর পছন্দ হয় পরীকে। গাজীর মনে হয় পীরের কথা। সুন্দরী কোন মেয়ের সাথে তার পাগল ও খুনি ছেলে হালিমের বিয়ে দিলে হালিম সুস্থ হয়ে যাবে। পরীর নামে সমস্ত সম্পত্তি লিখে নিয়ে গাজী তাকে পুত্রবধূ করে ঘরে তোলে। শর্ত থাকে যে, পরী কখনও তার স্বামীকে ত্যাগ করতে পারবে না। পরী সোনাইকেই তার স্বামী হিসেবে জানে। সোনাইর ফাঁসির খবর শুনে পরী নিজের জীবন দিয়ে পাগল হালিমের সাথে সম্পর্কচ্ছেদ করে। অন্যদিকে সোনাই জামিনে ছাড়া পেয়ে পরীর আত্মহত্যার খবর শুনে দেশান্তরী হয়।",
      link: "https://www.youtube.com/watch?v=b9tQhSmQjVM",
      image: "https://i.postimg.cc/nVTF6Mz4/image.png"
    },
    {
      title: "আমাদের সমাজ বিজ্ঞান",
      year: 2021,
      description: "এই নাটকের কাহিনি আমাদের সবার জীবনের সাথে কোন না কোন ভাবে মিলে যাবেই। ডিপ্রেশন, পারিবারিক চাপ, নিজের সিদ্ধান্ত না নিতে পারা, সমাজের অযৌক্তিক চাপ এসবই এই নাটকের মূল বিশয়বস্তু। মোট কথা অনেকগুলো সামাজিক সমস্যা খুব সুন্দরভাবে একেবারে বাস্তবিক আকারে দেখানো হয়েছে এই নাটকে।শাফায়েত গুনি নির্মাতা। অন্যদিকে, এই নাটকে সবাই দুর্দান্ত অভিনয় করেছে। ইয়াশ রোহানের জীবনের অন্যতম সেরা কাজ মনে হয়েছে এই নাটক। তার বোনের চরিত্রে তানজিকা ছিলেন দুর্দান্ত। এক দিকে ভাই বোনের সুন্দর রসায়ন এবং অন্যদিকে সামাজিক চাপ, এই প্রেক্ষাপটেই নাটক এগিয়ে যায়।  অনেকদিন পর তানিয়াকে নাটকে দেখলাম। তার অভিনয় ছিল খুবই প্রানবন্ত। তিনি দেখিয়েছেন নিয়মিত নাটক না করলেও তার অভিনয়ের মান বিন্দুমাত্র কমেনি।  শেষ দিকে সুন্দর একটি মেসেজ দিয়েছেন পরিচালক।",
      link: "https://www.youtube.com/watch?v=hGZhG9LKIYM",
      image: "https://i.postimg.cc/PfLG3RLL/image.png"
    },
    {
      title: "A Beautiful Mind",
      year: 2001,
      description: "The Nobel Prize winner John Forbes Nash Jr. still teaches at Princeton, and walks to campus every day. That these commonplace statements nearly brought tears to my eyes suggests the power of “A Beautiful Mind,” the story of a man who is one of the greatest mathematicians, and a victim of schizophrenia. Nash’s discoveries in game theory have an impact on our lives every day. He also believed for a time that Russians were sending him coded messages on the front page of the New York Times.",
      link: "https://cineb.rs/watch-movie/watch-a-beautiful-mind-free-18913.5298826",
      image: "https://i.postimg.cc/X70s3GzK/image.png"
    },
    {
      title: "Silver Linings Playbook",
      year: 2012,
      description: "Two individuals with mental health challenges find solace in each other's company.",
      link: "https://cineb.rs/watch-movie/watch-silver-linings-playbook-free-18899.5349640",
      image: "https://i.postimg.cc/kg7VtwZR/image.png"
    },
    {
      title: "Taare Zameen Par",
      year: 2007,
      description: "ছবিটির কাহিনী প্যাট্রিসিয়া পোলাক্কোর বই 'Thank You, Mr. Falker' থেকে অনুপ্রাণিত। ৮ বছরের ছেলে ঈশান আওয়াস্তি। ডিস্‌লেক্সিক রোগের কারণে সে কোন কিছু পড়তে কিংবা বানান করতে পারেনা। অক্ষরগুলো তার চোখের সামনে নেচে বেড়ায়। মাছ, ঘুড়ি, কুকুর হয়ে ঘুরে বেড়ানো সেই শব্দগুলো বালক মনের আনন্দের খোরাক হলেও তা বড়দের কাছে বিরক্তিকর ছাড়া আর কিছুই নয়। তাই বড়ভাই উহান যখন ক্লাসের সব বিষয়ে সর্বোচ্চ নম্বর পেয়ে মায়ের কাছে ছুটে আসে তখন ঈষানের রেজাল্টকার্ড তার পোষা কুকুরদের মুখে মুখে ঘুরে বেড়ায়। তার উপর সবাই বিরক্ত। শিক্ষক থেকে শুরু করে বন্ধু-বান্ধব বাবা সবাই তার উপর বিরক্ত। এভাবে আর কতো? এভাবে করলে সে তো আর বড় হয়ে আর চাকরি বাকরি পাবেনা। স্কুলে থেকে অভিযোগের পর অভিযোগের করণে তার বাবা তাকে বোর্ডিং স্কুলে পাঠাতে বাধ্য হয়। সেখানেই তার সাথে পরিচয় হয় চারু ও কারু কলার শিক্ষক রাম শংকর (আমির খান) এর সাথে। এরপর থেকেই মূল কাহিনী শুরু হয়।",
      link: "https://www.youtube.com/watch?v=3Z14uE7U0HY",
      image: "https://i.postimg.cc/CKHv6j06/image.png"
    },
      {
      title: "Detachment",
      year: 2011,
      description: "টিনেজ সময়টা সবসময়েই ফ্রাজাইল। এই সময় সঠিক গাইডেন্স,কিছুটা আন্তরিকতার সাথে সঠিক পথনির্দেশনা না পেলে,পরবর্তীতে টিনেজাররা আউট অব ট্র‍্যাক হয়ে যায়। তাদেরকে হ্যান্ডেল করতে হয় একটা কোমল টেন্ডার টেন্ডেন্সি থেকে,তাদের টেমড করার টেন্ডেন্সি থেকে নয়। মুভি হিসাবে ডিটাচমেন্ট পুরোটাই একটা ফিলোজফিকাল জার্নি। একজন পার্টটাইম স্কুল টিচার, যে কিনা কোপ-আপ করতে চাচ্ছে তথাকথিত বিগরে যাওয়া ছেলেপেলেদের, যাদের প্যারেন্টস পর্যন্ত হাল ছেড়ে দিয়েছে তাদের ভবিষ্যত নিয়ে। বডি শেমিং,ফিমেল ডিমোরালাইজেশান,এনক্সাইটি, পারসোনাল ডিলেমা,এমপ্যাথি- সব কিছুই এসেছে মুভিটিতে।।বর্তমান সময়ে আলোচিত ডিপ্রেশান,সুইসাইড ইত্যাদি টপিকের সাথে পুরোপুরি ব্লেন্ড করে এমন একটি মুভি। \
        ছবির যে লাইনগুলো ভালো লাগতে পারে আপনারওঃ 'We have such a responsibility to guide our young so that they don't end up falling apart, falling by the wayside, becoming insignificant.' \
'Life is an ocean of chaos and the realization that you are the one supposed to throw the buoy while struggling to stay afloat is devastating.'",
      link: "https://cineb.rs/watch-movie/watch-detachment-free-10933.5306695",
      image: "https://i.postimg.cc/PxVQByRK/image.png"
    },
    {
      title: "Good Will Hunting",
      year: 1997,
      description: "প্রত্যেকটি মানুষের মধ্যে কিছু অসাধারণ প্রতিভা লুকায়িত থাকে।হয়তো মানুষটা তার প্রতিভা সম্পর্কে জানে নাহ বা কালক্ষেপণ করে নাহ।কিন্তু তার মধ্যে থাকা লুকায়িত  প্রতিভাটি একদিন ঠিকই তার কাজের মাধ্যমে প্রকাশিত হয়। মানুষের জীবনে প্রতিভা হচ্ছে বিশেষ একটি ব্যাপার। কিন্ত শুধু যে প্রতিভা থাকলেই জীবনে সফলতার দ্বার উন্মোচিত হবে বিষয়টি ঠিক এমন নাহ।নিজের প্রতিভাকে পরিশ্রম, চর্চা,অনুশীলন, একাগ্রতা করার মাধ্যমেই  অনুধাবন করা যাবে জীবনে সফলতার আসল মানে। হলিউড ইন্ডাস্ট্রির যে কয়টি মুভি মানুষের জীবনের মোড় ঘুরিয়ে  দিয়েছে তারমধ্যে  Good Will Hunting সিনেমাটি অন্যতম।।",
      link: "https://cineb.rs/watch-movie/watch-good-will-hunting-free-18982.5349589",
      image: "https://i.postimg.cc/X7MjyFJZ/image.png"
    }
  ];

  const documentaries = [
    {
      title: "Untold: Breaking Point",
      year: 2021,
      description: "The film is the fifth in the nine-part Untold documentary film series. Its story focuses on the life and career of professional tennis star Mardy Fish, who was burdened by severe anxiety and mental health challenges, which changed his life on and off the court.",
      link: "https://cineb.rs/watch-movie/watch-untold-breaking-point-free-71836.4818415",
      image: "https://i.postimg.cc/MH7hBnPR/image.png"
    },
    {
      title: "Breaking the Stigma",
      year: 2021,
      description: "This documentary aims to educate and inform the public more about Attention Deficit Hyperactivity Disorder (ADHD) and how this neurodevelopmental disorder impacts the lives of people with it way more than you may have originally thought. It affects basically all aspects of their lives in one way or another, usually negatively. This documentary aims to clear up many myths and misconceptions concerning ADHD and has a major focus on African Americans with the disorder and their perspectives on life dealing with it.",
      link: "https://www.youtube.com/watch?v=IMdLxYowIJA",
      image: "https://i.postimg.cc/brgm8kV6/image.png"
    },
    {
      title: "Mental health and resilience - the secrets of inner strength | DW Documentary",
      year: 2024,
      description: "Around one billion people struggle with stress-related illness globally - and that figure is rising. What protects those with good mental health? Is their resilience innate? Or is the ability to withstand chronic stress and crisis something that can be learned? In the search for answers, the film visits some of the leading figures in resilience research. The filmmakers also interview epigeneticists and neuroscientists. In the largest European resilience center in Mainz, Germany, researchers conduct a long-term study to explore the mechanisms deployed by people who enjoy good mental health despite stress and crisis. In southern France, the film meets Boris Cyrulnik, a pioneer of resilience research. His credo: when it comes to resilient behavior, it’s not just down to us - society and politics also have a responsibility to create appropriate conditions for stable psychological health. And the film tells the moving story of two families united by tragedy: following the violent death of their two sons, who were friends, they struggle to find their way back to some semblance of normal life.",
      link: "https://www.youtube.com/watch?v=YdMCL9_UTE4",
      image: "https://i.postimg.cc/zXJ22YHd/image.png"
    },
    {
      title: "Heal",
      year: 2017,
      description: "Heal is a 2017 documentary film that was written and directed by Kelly Noonan-Gores and produced by Richell Morrissey and Adam Schomer. The film focuses on mind–body interventions and follows several individuals who used these techniques after being diagnosed with a fatal disease. ",
      link: "https://cineb.rs/watch-movie/watch-heal-free-67393.5515801",
      image: "https://i.postimg.cc/4dQbpnPX/image.png"
    },
    {
      title: "Podcast—This Psychiatrist KNOWS What’s Wrong With You (& Has The Tools To Fix It) | Phil Stutz x Rich Roll",
      year: 2024,
      description: "Phil Stutz is a renowned psychiatrist, author, and the protagonist in the Netflix documentary “Stutz”. We discuss his iconoclastic views on therapy, actionable tools for personal growth, spirituality, and more before Phil expertly psychoanalyzes Rich. ",
      link: "https://youtu.be/mwteIoVt-kM?si=Iy33DDJqXnvUHW-X",
      image: "https://i.postimg.cc/vZ514k3s/image.png"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-6">
      <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">Resources</h1>

      <div className="space-y-12">
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <Book className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-semibold text-purple-800">Recommended Books</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-t-xl mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-purple-700">{book.title}</h3>
                <p className="text-gray-600 mb-2">By {book.author}</p>
                <p className="text-gray-700 mb-4">{book.description}</p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 underline"
                >
                  Read the Ebook
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-2 mb-6">
            <Film className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-semibold text-purple-800">Movies</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {movies.map((movie, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded-t-xl mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-purple-700">{movie.title}</h3>
                <p className="text-gray-600 mb-2">{movie.year}</p>
                <p className="text-gray-700 mb-4">{movie.description}</p>
                <a
                  href={movie.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 underline"
                >
                  Watch the Movie
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-2 mb-6">
            <Youtube className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-semibold text-purple-800">Documentaries & Podcasts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {documentaries.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <img src={doc.image} alt={doc.title} className="w-full h-48 object-cover rounded-t-xl mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-purple-700">{doc.title}</h3>
                <p className="text-gray-600 mb-2">{doc.year}</p>
                <p className="text-gray-700 mb-4">{doc.description}</p>
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 underline"
                >
                  Watch now
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
