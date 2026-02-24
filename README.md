Answers to Questions

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

# Ans:

#getElementById
এটা দিয়ে আমরা একটা নির্দিষ্ট id এর element পাই।
id একটাই হয়, তাই এটা সবসময় একটা element return করে।

# getElementsByClassName
এটা দিয়ে একই class নামের অনেকগুলো element পাওয়া যায়।
এটা একটা HTMLCollection return করে (মানে list এর মতো)।

# querySelector
এটা CSS selector দিয়ে প্রথম matching element দেয়।
শুধু প্রথমটা return করে।

# querySelectorAll
এটা CSS selector দিয়ে সব matching element দেয়।
এটা NodeList return করে।


2. How do you create and insert a new element into the DOM?

# Ans:
একটা নতুন element বানাতে হলে আমরা ৩টা ধাপ করি:

1. element তৈরি করি
2. content দেই
3. parent এর ভিতরে add করি


3. What is Event Bubbling? And how does it work?

# Ans:

Event Bubbling মানে হলো event নিচ থেকে উপরের দিকে bubble করে উঠে যায়।
মানে একটা button একটা div এর ভিতরে থাকলে, যদি button এ click করি, তাহলে আগে button এর event চলবে, তারপর div এর event চলবে, তারপর body পর্যন্ত যেতে পারে।
এটাই Event Bubbling।


4. What is Event Delegation in JavaScript? Why is it useful?

# Ans:

Event Delegation মানে হলো parent element এ event listener বসানো, child গুলাতে আলাদা করে না বসানো। মানে অনেকগুলো button থাকলে, প্রতিটাতে আলাদা event না বসিয়ে parent div এ একটা event বসানো।

# Why useful?
1. কম code লাগে
2. performance ভালো হয়
3. dynamically নতুন element add হলেও কাজ করে

5. What is the difference between preventDefault() and stopPropagation() methods?

# Ans:

# preventDefault
এটা element এর default কাজ বন্ধ করে।
যেমন: form submit হলে page reload হয়, সেটা বন্ধ করা যায়।

# stopPropagation
এটা event bubbling বন্ধ করে।
উপরের দিকে event যাওয়া বন্ধ করে।

