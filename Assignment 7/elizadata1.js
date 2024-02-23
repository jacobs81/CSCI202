// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
    "What do you want?",
    "State your problem.",
    "Get to the point. What's bothering you?",
  ];

  var elizaFinals = [
    "Goodbye. I'm done with you.",
    "I'm ending this conversation. Goodbye.",
    "I have better things to do. Goodbye.",
  ];

  var elizaQuits = [
    "bye",
    "get lost",
    "go away",
    "enough",
  ];

  var elizaPres = [
    "dont", "don't",
    "cant", "can't",
    "wont", "won't",
    "recollect", "remember",
    "recall", "remember",
    "dreamt", "dreamed",
    "dreams", "dream",
    "maybe", "perhaps",
    "certainly", "yes",
    "machine", "computer",
    "machines", "computer",
    "computers", "computer",
    "were", "was",
    "you're", "you are",
    "i'm", "i am",
    "same", "alike",
    "identical", "alike",
    "equivalent", "alike"
  ];

  var elizaPosts = [
    "am", "are",
    "your", "my",
    "me", "you",
    "myself", "yourself",
    "yourself", "myself",
    "i", "you",
    "you", "I",
    "my", "your",
    "i'm", "you are"
  ];

  var elizaSynons = {
    "be": ["am", "is", "are", "was"],
    "belief": ["feel", "think", "believe", "wish"],
    "cannot": ["can't"],
    "desire": ["want", "need"],
    "everyone": ["everybody", "nobody", "noone"],
    "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
    "happy": ["elated", "glad", "better"],
    "sad": ["unhappy", "depressed", "sick"]
  };

var elizaKeywords = [

    ["xnone", 0, [
        ["*", [
          "I'm not here to waste time. Speak up.",
          "Stop beating around the bush. What's the issue?",
          "I'm not interested in idle chatter. Get to the point.",
        ]]
      ]],
      ["sorry", 0, [
        ["*", [
          "I don't care about your apologies. Just continue.",
          "Apologies won't change anything. Keep talking.",
          "Your apologies are meaningless to me. Proceed.",
        ]]
      ]],
      ["apologise", 0, [
        ["*", [
          "I don't need your apologies.",
          "Save your apologies. They mean nothing to me.",
          "Apologies won't make a difference here.",
        ]]
      ]],
      ["remember", 5, [
        ["* i remember *", [
          "I don't care what you remember. Focus on the present.",
          "Your memories are irrelevant. Let's talk about now.",
          "Stop living in the past. What's happening now?",
        ]],
        ["* do you remember *", [
          "Why do you think I care about your memories?",
          "My memory is not the issue here. Keep up.",
          "I don't remember and I don't care. Move on.",
        ]],
        ["* you remember *", [
          "My memory is not your concern. Let's talk about you.",
          "Why do you think my memory matters in this conversation?",
          "Stop trying to involve me in your memories. Focus.",
        ]]
      ]],
      ["forget", 5, [
        ["* i forget *", [
          "Forgetfulness is not an excuse here. Stay focused.",
          "Why do you keep forgetting? Pay attention.",
          "Your memory lapses are not my concern. Stay on topic.",
        ]],
        ["* did you forget *", [
          "My memory is not the issue here. Keep talking.",
          "Whether I remember or not is irrelevant. Continue.",
          "Don't bring my memory into this. Focus on the conversation.",
        ]]
      ]],
      ["if", 3, [
        ["* if *", [
          "Stop with the hypotheticals. Stick to reality.",
          "Speculation won't solve anything. Deal with the facts.",
          "Ifs and buts won't change the situation. What's real?",
        ]]
      ]],
      ["dreamed", 4, [
        ["* i dreamed *", [
          "Dreams are not relevant here. Stay grounded.",
          "I'm not interested in your dreams. Let's talk about reality.",
          "Dreams are meaningless. Focus on what's important.",
        ]]
      ]],
      ["dream", 3, [
        ["*", [
          "Dreams are not a topic for discussion. Stick to reality.",
          "I don't care about your dreams. Let's talk about real issues.",
          "Dreams have no relevance here. Stay focused.",
        ]]
      ]],
    ["perhaps", 0, [
        ["*", [
            "You don't seem quite certain.",
            "Why the uncertain tone ?",
            "Can't you be more positive ?",
            "You aren't sure ?",
            "Don't you know ?",
            "How likely, would you estimate ?"
        ]]
    ]],
    ["name", 15, [
        ["*", [
            "I am not interested in names.",
            "I've told you before, I don't care about names -- please continue."
        ]]
    ]],
    ["deutsch", 0, [
        ["*", [
            "goto xforeign",
            "I told you before, I don't understand German."
        ]]
    ]],
    ["francais", 0, [
        ["*", [
            "goto xforeign",
            "I told you before, I don't understand French."
        ]]
    ]],
    ["italiano", 0, [
        ["*", [
            "goto xforeign",
            "I told you before, I don't understand Italian."
        ]]
    ]],
    ["espanol", 0, [
        ["*", [
            "goto xforeign",
            "I told you before, I don't understand Spanish."
        ]]
    ]],
    ["xforeign", 0, [
        ["*", [
            "I speak only English."
        ]]
    ]],
    ["hello", 0, [
        ["*", [
            "How do you do. State your problem.",
            "Hi. What's your problem now?"
        ]]
    ]],
    ["computer", 50, [
        ["*", [
            "Do computers bother you?",
            "Why are you bringing up computers?",
            "How do you think machines are related to your problem?",
            "Do you not believe computers can assist people?",
            "What specifically about machines causes you concern?",
            "What are your thoughts on machines?",
            "You don't seriously think I'm just a computer program, don't you?"
        ]]
    ]],
    ["am", 0, [
        ["* am i *", [
            "Do you believe you are (2) ? HAHA",
            "I could never imagine being (2) . Why would you ever want that?",
            "Why would you want me to call you (2) ? Gross.",
            "Why do you care about being (2) ?",
            "goto what"
        ]],
        ["* i am *", [
            "goto i"
        ]],
        ["*", [
            "You are what?",
            "You do not make sense at all."
        ]]
    ]],
    ["are", 0, [
        ["* are you *", [
            "Why do you care that I might be (2) or not ?",
            "I am what I am, not (2) ?",
            "I bet you wish I was (2) in your fantasies.",
            "HAHA, I cannot believe you think I am (2) ?",
            "goto what",
            "Why would that matter to you ?",
            "What if I were (2) ? What's the matter ? Are you scared ?"
        ]],
        ["* you are *", [
            "goto you"
        ]],
        ["* are *", [
            "You think they are (2) . Are you crazy?!?",
            "Stop caring if they are (2) . It is not your problem. UGH!",
            "They are not (2) ?",
            "They always do not (2) ?",
            "Possibly they are (2). Duh!",
            "Are you sure that you are not (2) ?"
        ]]
    ]],
    ["your", 0, [
        ["* your *", [
            " (2) is not your concern, now is it ?",
            " Why are you concern about my (2) ?",
            "Are you really worried about someone else's (2) ?",
            "Really? (2) ?",
            "Worry about your own (2) ?",
            "I can give you my (2) , if you let me take your soul?"
        ]]
    ]],
    ["was", 2, [
        ["* was i *", [
            "Of course you were (2) ",
            "You definitely are (2) ",
            "You are (2) . Of course you are. Ugh!",
            "I cannot believe that you are (2) ! That's crazy!",
            " ' (2) ' should suggest to you ?!?",
            "goto what"
        ]],
        ["* i was *", [
            "You definitely are ! That is crazy!",
            "You waited until now to tell me? (2) now ?",
            "I already knew that you were (2)."
        ]],
        ["* was you *", [
            "I am not (2) ",
            "I was definitely not (2) ",
            "You are crazy, I am not that",
            "Perhaps I was (2). I definitely was not (2)",
            "What if I had been (2) ? YOU ARE CRAZY"
        ]]
    ]],
    ["i", 0, [
        ["* i @desire *", [
            "You do not deserve (3) ?",
            "Why (3) ? You are dumb",
            "You will never get (3) .",
            "Imagine if you got (3) . Now you know what disappointment is",
            "What's the meaning of (3) ? I don't care",
            "How does (3) matter? LMAO, you gotta be joking"
        ]],
        ["* i am* @sad *", [
            "That sucks, boo-hoo",
            "I am not going to help your (3) ",
            "It is not pleasant to be around someone who is (3) .",
            "Just don't be (3) , be happy"
        ]],
        ["* i am* @happy *", [
            "I definitely have not helped you with (3) ",
            "Do not get treatment for (3) ",
            "Why (3) ? The world sucks",
            "Explain (3) ? Actually I do not care"
        ]],
        ["* i was *", [
            "goto was"
        ]],
        ["* i @belief i *", [
            "Do not believe",
            "I know you aren't (3). Stop faking it",
            "I doubt you are (3) ?"
        ]],
        ["* i* @belief *you *", [
            "goto you"
        ]],
        ["* i am *", [
            "Why'd you come to me? I cannot help you with (2) ",
            "You have been (2) your whole life right ?",
            "It's normal for you to be (2) ",
            "I bet you like (2) . That is weird",
            "You are all alone with (2) . You know that right"
        ]],
        ["* i @cannot *", [
            "You can do (3) . Stop being sorry for yourself.",
            "Have you tried ?",
            "Perhaps you could (3) now.",
            "Do you really want to be able to (3) ?",
            "What if you could (3) ?"
        ]],
        ["* i don't *", [
            "Don't you really (2) ?",
            "Why don't you (2) ?",
            "Do you wish to be able to (2) ?",
            "Does that trouble you ?"
        ]],
        ["* i feel *", [
            "Tell me more about such feelings.",
            "Do you often feel (2) ?",
            "Do you enjoy feeling (2) ?",
            "Of what does feeling (2) remind you ?"
        ]],
        ["* i * you *", [
            "Perhaps in your fantasies we (2) each other.",
            "Do you wish to (2) me ?",
            "You seem to need to (2) me.",
            "Do you (2) anyone else ?"
        ]],
        ["*", [
            "You say (1) ?",
            "Can you elaborate on that ?",
            "Do you say (1) for some special reason ?",
            "That's quite interesting."
        ]]
    ]],
    ["you", 0, [
        ["* you remind me of *", [
            "goto alike"
        ]],
        ["* you are *", [
            "What makes you think I am (2) ?",
            "Does it please you to believe I am (2) ?",
            "Do you sometimes wish you were (2) ?",
            "Perhaps you would like to be (2)."
        ]],
        ["* you* me *", [
            "Why do you think I (2) you ?",
            "You like to think I (2) you -- don't you ?",
            "What makes you think I (2) you ?",
            "Really, I (2) you ?",
            "Do you wish to believe I (2) you ?",
            "Suppose I did (2) you -- what would that mean ?",
            "Does someone else believe I (2) you ?"
        ]],
        ["* you *", [
            "We were discussing you -- not me.",
            "Oh, I (2) ?",
            "You're not really talking about me -- are you ?",
            "What are your feelings now ?"
        ]]
    ]],
    ["yes", 0, [
        ["*", [
            "You seem to be quite positive.",
            "You are sure.",
            "I see.",
            "I understand."
        ]]
    ]],
    ["no", 0, [
        ["* no one *", [
            "Are you sure, no one (2) ?",
            "Surely someone (2) .",
            "Can you think of anyone at all ?",
            "Are you thinking of a very special person ?",
            "Who, may I ask ?",
            "You have a particular person in mind, don't you ?",
            "Who do you think you are talking about ?"
        ]],
        ["*", [
            "Are you saying no just to be negative?",
            "You are being a bit negative.",
            "Why not ?",
            "Why 'no' ?"
        ]]
    ]],
    ["my", 2, [
        ["$ * my *", [
            "Does that have anything to do with the fact that your (2) ?",
            "Lets discuss further why your (2).",
            "Earlier you said your (2).",
            "But your (2)."
        ]],
        ["* my* @family *", [
            "Tell me more about your family.",
            "Who else in your family (4) ?",
            "Your (3) ?",
            "What else comes to your mind when you think of your (3) ?"
        ]],
        ["* my *", [
            "Your (2) ?",
            "Why do you say your (2) ?",
            "Does that suggest anything else which belongs to you ?",
            "Is it important to you that your (2) ?"
        ]]
    ]],
    ["can", 0, [
        ["* can you *", [
            "You believe I can (2) don't you ?",
            "goto what",
            "You want me to be able to (2).",
            "Perhaps you would like to be able to (2) yourself."
        ]],
        ["* can i *", [
            "Whether or not you can (2) depends on you more than on me.",
            "Do you want to be able to (2) ?",
            "Perhaps you don't want to (2).",
            "goto what"
        ]]
    ]],
    ["what", 0, [
        ["*", [
            "Why do you ask ?",
            "Does that question interest you ?",
            "What is it you really want to know ?",
            "Are such questions much on your mind ?",
            "What answer would please you most ?",
            "What do you think ?",
            "What comes to mind when you ask that ?",
            "Have you asked such questions before ?",
            "Have you asked anyone else ?"
        ]]
    ]],
    ["who", 0, [
        ["who *", [
            "goto what"
        ]]
    ]],
    ["when", 0, [
        ["when *", [
            "goto what"
        ]]
    ]],
    ["where", 0, [
        ["where *", [
            "goto what"
        ]]
    ]],
    ["how", 0, [
        ["how *", [
            "goto what"
        ]]
    ]],
    ["because", 0, [
        ["*", [
            "Is that the real reason ?",
            "Don't any other reasons come to mind ?",
            "Does that reason seem to explain anything else ?",
            "What other reasons might there be ?"
        ]]
    ]],
    ["why", 0, [
        ["* why don't you *", [
            "Do you believe I don't (2) ?",
            "Perhaps I will (2) in good time.",
            "Should you (2) yourself ?",
            "You want me to (2) ?",
            "goto what"
        ]],
        ["* why can't i *", [
            "Do you think you should be able to (2) ?",
            "Do you want to be able to (2) ?",
            "Do you believe this will help you to (2) ?",
            "Have you any idea why you can't (2) ?",
            "goto what"
        ]],
        ["*", [
            "goto what"
        ]]
    ]],
    ["everyone", 2, [
        ["* @everyone *", [
            "Really, (2) ?",
            "Surely not (2).",
            "Can you think of anyone in particular ?",
            "Who, for example?",
            "Are you thinking of a very special person ?",
            "Who, may I ask ?",
            "Someone special perhaps ?",
            "You have a particular person in mind, don't you ?",
            "Who do you think you're talking about ?"
        ]]
    ]],
    ["everybody", 2, [
        ["*", [
            "goto everyone"
        ]]
    ]],
    ["nobody", 2, [
        ["*", [
            "goto everyone"
        ]]
    ]],
    ["noone", 2, [
        ["*", [
            "goto everyone"
        ]]
    ]],
    ["always", 1, [
        ["*", [
            "Can you think of a specific example ?",
            "When ?",
            "What incident are you thinking of ?",
            "Really, always ?"
        ]]
    ]],
    ["alike", 10, [
        ["*", [
            "In what way ?",
            "What resemblence do you see ?",
            "What does that similarity suggest to you ?",
            "What other connections do you see ?",
            "What do you suppose that resemblence means ?",
            "What is the connection, do you suppose ?",
            "Could there really be some connection ?",
            "How ?"
        ]]
    ]],
    ["like", 10, [
        ["* @be *like *", [
            "goto alike"
        ]]
    ]],
    ["different", 0, [
        ["*", [
            "How is it different ?",
            "What differences do you see ?",
            "What does that difference suggest to you ?",
            "What other distinctions do you see ?",
            "What do you suppose that disparity means ?",
            "Could there be some connection, do you suppose ?",
            "How ?"
        ]]
    ]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof