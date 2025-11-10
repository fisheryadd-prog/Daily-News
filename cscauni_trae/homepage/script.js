/* ============================================
   CSCA小站网站JavaScript交互功能
   功能包括：倒计时、公告轮播、语言切换、导航栏效果等
   ============================================ */

// ========== 语言包定义 ==========
/**
 * 中英文语言包对象
 * 包含页面所有需要翻译的文本内容
 */
const translations = {
    zh: {
        // 导航栏
        'nav.home': '首页',
        'nav.practice': '考试模拟',
        'nav.news': '官方资讯',
        // 认证相关
        'auth.login': '登录',
        'auth.register': '注册',
        'auth.profile': '个人中心',
        // Banner区域
        'banner.title': '来华留学本科入学学业水平测试（CSCA）',
        'banner.subtitle': '权威考试 · 智能学习 · 全球升学',
        'banner.countdown.label': '距离下次考试还有：',
        'banner.countdown.days': '天',
        'banner.countdown.hours': '时',
        'banner.countdown.minutes': '分',
        'banner.countdown.seconds': '秒',
        'banner.announcement.title': '📢 官方公告',
        'banner.announcement.source1': '教育部',
        'banner.announcement.title1': '2025年CSCA考试报名通知',
        'banner.announcement.source2': '留基委',
        'banner.announcement.title2': '来华留学奖学金申请指南更新',
        'banner.announcement.source3': '高校',
        'banner.announcement.title3': '多所高校公布CSCA成绩要求',
        // 练习中心
        'practice.title': '🎓 CSCA练习中心',
        'practice.subtitle': '选择科目，开始你的学习之旅',
        'practice.btn': '进入练习',
        'practice.menu.exam': '考试说明',
        'practice.menu.test': '模拟题库',
        'practice.subject1.name': '中文',
        'practice.subject1.desc': '提升中文表达力，掌握学术写作',
        'practice.subject2.name': '数学',
        'practice.subject2.desc': '掌握基础数学知识，提升解题能力',
        'practice.subject3.name': '物理',
        'practice.subject3.desc': '掌握物理基础理论，提升实验分析能力',
        'practice.subject4.name': '化学',
        'practice.subject4.desc': '理解化学原理，掌握实验操作技能',
        // 新闻区域
        'news.title': '📰 考试公告与最新资讯',
        'news.column1.title': '教育部 / 留基委公告',
        'news.column2.title': '高校新闻',
        'news.column3.title': '使领馆动态与签证信息',
        // 页脚
        'footer.desc': '来华留学本科入学学业水平测试官方学习平台，为全球学生提供权威的考试资源和学习指导。',
        'footer.email': '📧 邮箱：info@csca.edu.cn',
        'footer.phone': '📞 热线：400-123-4567',
        'footer.nav.title': '快速导航',
        'footer.nav.practice': '练习中心',
        'footer.nav.scores': '院校成绩',
        'footer.nav.faq': '常见问题',
        'footer.nav.query': '成绩查询',
        'footer.follow.title': '关注我们'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.practice': 'Practice',
        'nav.news': 'News',
        // Authentication
        'auth.login': 'Login',
        'auth.register': 'Register',
        'auth.profile': 'Profile',
        // Banner area
        'banner.title': 'Chinese Scholarship Council Assessment (CSCA)',
        'banner.subtitle': 'Authoritative Exam · Smart Learning · Global Education',
        'banner.countdown.label': 'Time until next exam:',
        'banner.countdown.days': 'Days',
        'banner.countdown.hours': 'Hours',
        'banner.countdown.minutes': 'Minutes',
        'banner.countdown.seconds': 'Seconds',
        'banner.announcement.title': '📢 Official Announcements',
        'banner.announcement.source1': 'Ministry of Education',
        'banner.announcement.title1': '2025 CSCA Exam Registration Notice',
        'banner.announcement.source2': 'CSC',
        'banner.announcement.title2': 'Updated Scholarship Application Guidelines',
        'banner.announcement.source3': 'Universities',
        'banner.announcement.title3': 'Multiple Universities Announce CSCA Score Requirements',
        // Practice center
        'practice.title': '🎓 CSCA Practice Center',
        'practice.subtitle': 'Choose a subject and start your learning journey',
        'practice.btn': 'Start Practice',
        'practice.menu.exam': 'Exam Guide',
        'practice.menu.test': 'Mock Tests',
        'practice.subject1.name': 'Chinese',
        'practice.subject1.desc': 'Improve Chinese expression and master academic writing',
        'practice.subject2.name': 'Mathematics',
        'practice.subject2.desc': 'Master basic math knowledge and improve problem-solving skills',
        'practice.subject3.name': 'Physics',
        'practice.subject3.desc': 'Master basic physics theory and improve experimental analysis skills',
        'practice.subject4.name': 'Chemistry',
        'practice.subject4.desc': 'Understand chemical principles and master experimental operation skills',
        // News section
        'news.title': '📰 Exam Announcements & Latest News',
        'news.column1.title': 'Ministry of Education / CSC Announcements',
        'news.column2.title': 'University News',
        'news.column3.title': 'Embassy & Visa Information',
        // Footer
        'footer.desc': 'Official learning platform for CSCA, providing authoritative exam resources and study guidance for global students.',
        'footer.email': '📧 Email: info@csca.edu.cn',
        'footer.phone': '📞 Hotline: 400-123-4567',
        'footer.nav.title': 'Quick Links',
        'footer.nav.practice': 'Practice Center',
        'footer.nav.scores': 'University Scores',
        'footer.nav.faq': 'FAQ',
        'footer.nav.query': 'Score Query',
        'footer.follow.title': 'Follow Us'
    }
};

// 当前语言，默认为中文
let currentLanguage = 'zh';

// ========== 页面加载完成后执行 ==========
document.addEventListener('DOMContentLoaded', function() {
    // 从本地存储读取用户语言偏好
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
        currentLanguage = savedLanguage;
        // 更新语言按钮状态
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === savedLanguage) {
                btn.classList.add('active');
            }
        });
        // 应用保存的语言
        switchLanguage(savedLanguage);
    }
    
    // 初始化所有功能
    initCountdown();
    initAnnouncementCarousel();
    initLanguageSwitch();
    initNavbarScroll();
    initSmoothScroll();
    initNewsClick();
});

// ========== 1. 考试倒计时功能 ==========
/**
 * 初始化倒计时功能
 * 计算距离目标考试日期的剩余时间，并实时更新显示
 */
function initCountdown() {
    // 设置目标考试日期（设置为未来日期，确保倒计时正常显示）
    // 如果当前日期已经过了，则设置为下一年的同一天
    const now = new Date();
    let targetDate = new Date('2025-12-15T09:00:00').getTime();
    
    // 如果目标日期已过，设置为下一年的同一天
    if (targetDate < now.getTime()) {
        const nextYear = now.getFullYear() + 1;
        targetDate = new Date(`${nextYear}-12-15T09:00:00`).getTime();
    }
    
    // 获取倒计时显示元素
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // 检查元素是否存在
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        console.error('倒计时元素未找到');
        return;
    }
    
    /**
     * 更新倒计时显示
     * 每秒执行一次，计算并更新剩余时间
     */
    function updateCountdown() {
        // 获取当前时间
        const now = new Date().getTime();
        
        // 计算时间差（毫秒）
        const distance = targetDate - now;
        
        // 如果时间已过，显示0
        if (distance < 0) {
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            return;
        }
        
        // 计算天、时、分、秒
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // 更新显示（确保两位数显示）
        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
        
        // 添加数字更新动画效果
        if (secondsElement.textContent !== secondsElement.dataset.lastValue) {
            secondsElement.style.transform = 'scale(1.2)';
            setTimeout(() => {
                secondsElement.style.transform = 'scale(1)';
            }, 200);
            secondsElement.dataset.lastValue = secondsElement.textContent;
        }
    }
    
    // 立即执行一次，避免初始延迟
    updateCountdown();
    
    // 每秒更新一次
    setInterval(updateCountdown, 1000);
}

// ========== 2. 官方公告轮播功能 ==========
/**
 * 初始化公告轮播功能
 * 自动轮播显示3条官方公告，每5秒切换一次
 */
function initAnnouncementCarousel() {
    // 获取所有公告项
    const announcementItems = document.querySelectorAll('.announcement-item');
    
    // 如果没有公告项，直接返回
    if (announcementItems.length === 0) return;
    
    let currentIndex = 0; // 当前显示的公告索引
    
    /**
     * 切换到下一个公告
     * 移除当前项的active类，添加下一项的active类
     */
    function nextAnnouncement() {
        // 移除当前项的active类
        announcementItems[currentIndex].classList.remove('active');
        
        // 计算下一个索引（循环）
        currentIndex = (currentIndex + 1) % announcementItems.length;
        
        // 添加下一项的active类
        announcementItems[currentIndex].classList.add('active');
    }
    
    // 每5秒自动切换一次
    setInterval(nextAnnouncement, 5000);
}

// ========== 3. 语言切换功能 ==========
/**
 * 初始化语言切换功能
 * 支持中文和英文切换，点击按钮切换语言
 */
function initLanguageSwitch() {
    // 获取所有语言切换按钮
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // 为每个按钮添加点击事件
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang; // 获取按钮的语言代码
            
            // 移除所有按钮的active类
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // 为当前点击的按钮添加active类
            this.classList.add('active');
            
            // 切换语言（这里只是示例，实际需要加载对应的语言包）
            switchLanguage(lang);
        });
    });
}

/**
 * 切换语言内容
 * @param {string} lang - 语言代码 ('zh' 或 'en')
 */
function switchLanguage(lang) {
    // 更新当前语言
    currentLanguage = lang;
    
    // 更新页面语言属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    // 更新页面标题
    if (lang === 'en') {
        document.title = 'CSCA Station - Chinese Scholarship Council Assessment';
    } else {
        document.title = 'CSCA小站 - 来华留学本科入学学业水平测试';
    }
    
    // 获取当前语言的语言包
    const langPack = translations[lang];
    if (!langPack) {
        console.error('语言包不存在:', lang);
        return;
    }
    
    // 查找所有带有 data-i18n 属性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    
    // 遍历所有元素并更新文本内容
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = langPack[key];
        
        if (translation) {
            // 更新元素的文本内容
            element.textContent = translation;
        } else {
            console.warn('翻译键不存在:', key);
        }
    });
    
    // 保存用户语言偏好到本地存储
    localStorage.setItem('preferredLanguage', lang);
    
    console.log('语言已切换到:', lang);
}

// ========== 4. 导航栏滚动效果 ==========
/**
 * 初始化导航栏滚动效果
 * 当页面滚动时，导航栏添加阴影效果，提升视觉层次
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    /**
     * 监听页面滚动事件
     * 根据滚动位置调整导航栏样式
     */
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 如果滚动超过50px，添加阴影效果
        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// ========== 5. 平滑滚动功能 ==========
/**
 * 初始化平滑滚动功能
 * 点击导航链接时，平滑滚动到对应区域
 */
function initSmoothScroll() {
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    // 为每个链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认跳转行为
            
            // 获取目标区域的ID
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // 如果目标元素存在，平滑滚动到该位置
            if (targetElement) {
                // 计算目标位置（考虑固定导航栏的高度）
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                // 平滑滚动
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // 更新导航链接的active状态
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// ========== 6. 新闻点击功能 ==========
/**
 * 初始化新闻点击功能
 * 点击新闻标题时，跳转到详情页（示例：显示提示）
 */
function initNewsClick() {
    // 获取所有新闻项（包括标题和整个新闻卡片）
    const newsItems = document.querySelectorAll('.news-item');
    
    // 为每个新闻项添加点击事件
    newsItems.forEach((item, index) => {
        // 为整个新闻卡片添加点击事件，提升用户体验
        item.style.cursor = 'pointer';
        
        item.addEventListener('click', function(e) {
            // 如果点击的是链接，不阻止默认行为
            if (e.target.tagName === 'A') {
                return;
            }
            
            // 获取新闻标题文本
            const newsTitle = this.querySelector('.news-title');
            const newsText = newsTitle ? newsTitle.textContent : '';
            
            // 跳转到新闻详情页（使用新闻索引作为ID，实际项目中应该使用真实的新闻ID）
            // 这里创建一个简单的详情页URL
            const newsId = index + 1;
            const detailUrl = `news-detail.html?id=${newsId}&title=${encodeURIComponent(newsText)}`;
            
            // 跳转到详情页
            window.location.href = detailUrl;
            
            console.log('跳转到新闻详情:', newsText);
        });
    });
    
    // 同时为新闻标题添加点击事件（确保点击标题也能跳转）
    const newsTitles = document.querySelectorAll('.news-title');
    newsTitles.forEach((title, index) => {
        title.style.cursor = 'pointer';
        title.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡到父元素
            
            const newsText = this.textContent;
            const newsId = index + 1;
            const detailUrl = `news-detail.html?id=${newsId}&title=${encodeURIComponent(newsText)}`;
            
            window.location.href = detailUrl;
        });
    });
}

// ========== 7. 登录/注册按钮功能 ==========
/**
 * 初始化登录注册按钮功能
 * 点击按钮时显示登录/注册表单（示例）
 */
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.btn-login');
    const registerBtn = document.querySelector('.btn-register');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            // 这里应该显示登录模态框
            console.log('打开登录页面');
            // 实际项目中：showLoginModal();
        });
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            // 这里应该显示注册模态框
            console.log('打开注册页面');
            // 实际项目中：showRegisterModal();
        });
    }
});


// ========== 9. 科目卡片点击功能 ==========
document.addEventListener('DOMContentLoaded', function() {
    const practiceButtons = document.querySelectorAll('.btn-practice');
    
    practiceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡
            
            // 获取科目名称
            const subjectCard = this.closest('.subject-card');
            const subjectName = subjectCard.querySelector('.subject-name').textContent;
            
            // 跳转到对应科目的练习页面
            const practiceUrl = `practice.html?subject=${encodeURIComponent(subjectName)}`;
            window.location.href = practiceUrl;
        });
    });
    
    // 科目卡片的二级菜单点击
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const menuText = this.textContent;
            const subjectCard = this.closest('.subject-card');
            const subjectName = subjectCard.querySelector('.subject-name').textContent;
            
            // 根据菜单项跳转到对应页面
            if (menuText.includes('模拟题库') || menuText.includes('Mock Tests')) {
                // 跳转到模拟练习页面
                const practiceUrl = `practice.html?subject=${encodeURIComponent(subjectName)}`;
                window.location.href = practiceUrl;
            } else if (menuText.includes('考试说明') || menuText.includes('Exam Guide')) {
                // 考试说明页面（暂时显示提示）
                alert(`${subjectName}科目的考试说明功能正在开发中...`);
            }
        });
    });
});

// ========== 10. 页面滚动时的动画效果 ==========
/**
 * 初始化滚动动画
 * 当元素进入视口时，添加淡入动画效果
 */
function initScrollAnimation() {
    // 获取所有需要动画的元素
    const animatedElements = document.querySelectorAll('.subject-card, .news-item');
    
    // 创建 Intersection Observer 来监听元素是否进入视口
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 元素进入视口时，添加动画类
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // 动画完成后停止观察
            }
        });
    }, {
        threshold: 0.1 // 当元素10%可见时触发
    });
    
    // 观察所有元素
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// 页面加载完成后初始化滚动动画
document.addEventListener('DOMContentLoaded', function() {
    // 延迟执行，确保页面内容已加载
    setTimeout(initScrollAnimation, 100);
});

// ========== 11. 响应式导航菜单（移动端） ==========
/**
 * 在移动端添加导航菜单切换功能
 * 当屏幕宽度较小时，显示汉堡菜单
 */
function initMobileMenu() {
    // 这里可以添加移动端菜单的切换逻辑
    // 例如：添加汉堡菜单按钮，点击时显示/隐藏导航菜单
    const navMenu = document.querySelector('.nav-menu');
    const windowWidth = window.innerWidth;
    
    // 如果屏幕宽度小于768px，可以考虑添加移动端菜单
    if (windowWidth < 768) {
        // 添加移动端菜单逻辑
        console.log('移动端菜单');
    }
}

// 监听窗口大小变化
window.addEventListener('resize', function() {
    initMobileMenu();
});

