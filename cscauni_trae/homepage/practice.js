/* ============================================
   CSCA模拟练习页面JavaScript交互功能
   功能包括：科目选择、套题选择、题目管理、答题、计时、提交、查看答案等
   所有题目均为客观选择题（单选题或多选题）
   ============================================ */

// ========== 题库数据：按科目划分多套试题 ==========
const subjectTestSets = {
    chinese: {
        name: '中文',
        testSets: {
            set1: {
                name: '第一套',
                questions: [
                    {
                        id: 'chinese-set1-q1',
                        type: 'single',
                        title: '下列词语中，读音完全正确的一组是：',
                        options: [
                            'A. 处理(chǔlǐ) 处理(chǔlǐ) 处理(chǔlǐ)',
                            'B. 处理(chùlǐ) 处理(chùlǐ) 处理(chùlǐ)',
                            'C. 处理(chǔlǐ) 处理(chùlǐ) 处理(chǔlǐ)',
                            'D. 处理(chùlǐ) 处理(chǔlǐ) 处理(chùlǐ)'
                        ],
                        correctAnswer: 'A',
                        explanation: 'A选项的读音完全正确。'
                    },
                    {
                        id: 'chinese-set1-q2',
                        type: 'single',
                        title: '下列句子中，没有语病的一项是：',
                        options: [
                            'A. 通过这次学习，使我提高了认识。',
                            'B. 我们要认真克服并发现工作中的缺点。',
                            'C. 这篇文章的内容和见解都很深刻。',
                            'D. 我们要努力改正自己的缺点和错误。'
                        ],
                        correctAnswer: 'D',
                        explanation: 'D选项没有语病，其他选项都有语法错误。'
                    },
                    {
                        id: 'chinese-set1-q3',
                        type: 'multiple',
                        title: '下列哪些是古代中国的四大发明？（可多选）',
                        options: [
                            'A. 造纸术',
                            'B. 指南针',
                            'C. 火药',
                            'D. 印刷术',
                            'E. 算盘'
                        ],
                        correctAnswer: ['A', 'B', 'C', 'D'],
                        explanation: '古代中国的四大发明是：造纸术、指南针、火药、印刷术。'
                    },
                    {
                        id: 'chinese-set1-q4',
                        type: 'single',
                        title: '下列词语中，书写完全正确的一组是：',
                        options: [
                            'A. 再接再厉 再接再厉 再接再厉',
                            'B. 再接再励 再接再励 再接再励',
                            'C. 再接再厉 再接再励 再接再厉',
                            'D. 再接再励 再接再厉 再接再励'
                        ],
                        correctAnswer: 'A',
                        explanation: 'A选项的书写完全正确。'
                    },
                    {
                        id: 'chinese-set1-q5',
                        type: 'single',
                        title: '下列句子中，标点符号使用正确的一项是：',
                        options: [
                            'A. 他说："今天天气真好。"',
                            'B. 他说："今天天气真好"。',
                            'C. 他说："今天天气真好"',
                            'D. 他说："今天天气真好"！'
                        ],
                        correctAnswer: 'A',
                        explanation: 'A选项的标点符号使用正确，引号内的句号应该在引号内。'
                    },
                    {
                        id: 'chinese-set1-q6',
                        type: 'multiple',
                        title: '下列哪些是常见的修辞手法？（可多选）',
                        options: [
                            'A. 比喻',
                            'B. 拟人',
                            'C. 夸张',
                            'D. 排比',
                            'E. 对偶'
                        ],
                        correctAnswer: ['A', 'B', 'C', 'D', 'E'],
                        explanation: '这些都是常见的修辞手法。'
                    },
                    {
                        id: 'chinese-set1-q7',
                        type: 'single',
                        title: '下列词语中，属于近义词的一组是：',
                        options: [
                            'A. 美丽 - 丑陋',
                            'B. 高兴 - 快乐',
                            'C. 大 - 小',
                            'D. 高 - 低'
                        ],
                        correctAnswer: 'B',
                        explanation: 'B选项中的"高兴"和"快乐"是近义词。'
                    },
                    {
                        id: 'chinese-set1-q8',
                        type: 'single',
                        title: '下列句子中，使用了比喻修辞手法的一项是：',
                        options: [
                            'A. 他跑得很快。',
                            'B. 他像风一样跑得很快。',
                            'C. 他跑得非常快。',
                            'D. 他跑得比谁都快。'
                        ],
                        correctAnswer: 'B',
                        explanation: 'B选项使用了比喻修辞手法，将"他"比作"风"。'
                    },
                    {
                        id: 'chinese-set1-q9',
                        type: 'single',
                        title: '下列成语中，与"画蛇添足"意思相近的是：',
                        options: [
                            'A. 多此一举',
                            'B. 锦上添花',
                            'C. 雪中送炭',
                            'D. 画龙点睛'
                        ],
                        correctAnswer: 'A',
                        explanation: '"画蛇添足"和"多此一举"都表示做了不必要的事情。'
                    },
                    {
                        id: 'chinese-set1-q10',
                        type: 'multiple',
                        title: '下列哪些是《论语》中的经典句子？（可多选）',
                        options: [
                            'A. 学而时习之，不亦说乎',
                            'B. 有朋自远方来，不亦乐乎',
                            'C. 人不知而不愠，不亦君子乎',
                            'D. 三人行，必有我师焉',
                            'E. 温故而知新，可以为师矣'
                        ],
                        correctAnswer: ['A', 'B', 'C', 'D', 'E'],
                        explanation: '这些都是《论语》中的经典句子。'
                    }
                ]
            },
            set2: {
                name: '第二套',
                questions: [
                    {
                        id: 'chinese-set2-q1',
                        type: 'single',
                        title: '下列词语中，注音完全正确的一组是：',
                        options: [
                            'A. 参差(cēncī) 参差(cēncī) 参差(cēncī)',
                            'B. 参差(cānchā) 参差(cānchā) 参差(cānchā)',
                            'C. 参差(cēncī) 参差(cānchā) 参差(cēncī)',
                            'D. 参差(cānchā) 参差(cēncī) 参差(cānchā)'
                        ],
                        correctAnswer: 'A',
                        explanation: 'A选项的注音完全正确。'
                    },
                    {
                        id: 'chinese-set2-q2',
                        type: 'single',
                        title: '下列句子中，成语使用正确的一项是：',
                        options: [
                            'A. 他做事总是半途而废，真是画蛇添足。',
                            'B. 这次考试他考了满分，真是锦上添花。',
                            'C. 他的文章写得很好，真是画龙点睛。',
                            'D. 他在困难时帮助了我，真是雪中送炭。'
                        ],
                        correctAnswer: 'D',
                        explanation: 'D选项的成语使用正确，"雪中送炭"比喻在别人急需时给予帮助。'
                    },
                    {
                        id: 'chinese-set2-q3',
                        type: 'multiple',
                        title: '下列哪些是唐代的著名诗人？（可多选）',
                        options: [
                            'A. 李白',
                            'B. 杜甫',
                            'C. 白居易',
                            'D. 苏轼',
                            'E. 王维'
                        ],
                        correctAnswer: ['A', 'B', 'C', 'E'],
                        explanation: '李白、杜甫、白居易、王维都是唐代诗人，苏轼是宋代诗人。'
                    },
                    {
                        id: 'chinese-set2-q4',
                        type: 'single',
                        title: '下列句子中，没有错别字的一项是：',
                        options: [
                            'A. 他学习很认真，成绩一直名列前茅。',
                            'B. 他学习很认真，成绩一直名列前矛。',
                            'C. 他学习很认真，成绩一直名例前茅。',
                            'D. 他学习很认真，成绩一直名例前矛。'
                        ],
                        correctAnswer: 'A',
                        explanation: 'A选项没有错别字，"名列前茅"是正确的写法。'
                    },
                    {
                        id: 'chinese-set2-q5',
                        type: 'single',
                        title: '下列句子中，使用了拟人修辞手法的一项是：',
                        options: [
                            'A. 花儿开了。',
                            'B. 花儿在微笑。',
                            'C. 花儿很美丽。',
                            'D. 花儿很多。'
                        ],
                        correctAnswer: 'B',
                        explanation: 'B选项使用了拟人修辞手法，将"花儿"拟人化为"微笑"。'
                    },
                    {
                        id: 'chinese-set2-q6',
                        type: 'multiple',
                        title: '下列哪些是《诗经》中的名篇？（可多选）',
                        options: [
                            'A. 关雎',
                            'B. 蒹葭',
                            'C. 静女',
                            'D. 将进酒',
                            'E. 春江花月夜'
                        ],
                        correctAnswer: ['A', 'B', 'C'],
                        explanation: '《关雎》、《蒹葭》、《静女》都是《诗经》中的名篇。'
                    },
                    {
                        id: 'chinese-set2-q7',
                        type: 'single',
                        title: '下列词语中，与"勤奋"意思相近的是：',
                        options: [
                            'A. 懒惰',
                            'B. 努力',
                            'C. 懈怠',
                            'D. 散漫'
                        ],
                        correctAnswer: 'B',
                        explanation: '"勤奋"和"努力"意思相近，都表示刻苦用功。'
                    },
                    {
                        id: 'chinese-set2-q8',
                        type: 'single',
                        title: '下列句子中，使用了夸张修辞手法的一项是：',
                        options: [
                            'A. 他很高兴。',
                            'B. 他高兴得跳了起来。',
                            'C. 他高兴得飞上了天。',
                            'D. 他非常高兴。'
                        ],
                        correctAnswer: 'C',
                        explanation: 'C选项使用了夸张修辞手法，"飞上了天"是夸张的表达。'
                    },
                    {
                        id: 'chinese-set2-q9',
                        type: 'single',
                        title: '下列成语中，与"守株待兔"意思相近的是：',
                        options: [
                            'A. 刻舟求剑',
                            'B. 亡羊补牢',
                            'C. 画蛇添足',
                            'D. 掩耳盗铃'
                        ],
                        correctAnswer: 'A',
                        explanation: '"守株待兔"和"刻舟求剑"都表示思想僵化，不知变通。'
                    },
                    {
                        id: 'chinese-set2-q10',
                        type: 'multiple',
                        title: '下列哪些是《史记》的作者司马迁的贡献？（可多选）',
                        options: [
                            'A. 开创纪传体史书体例',
                            'B. 记录从黄帝到汉武帝的历史',
                            'C. 被誉为"史家之绝唱，无韵之离骚"',
                            'D. 创作《离骚》',
                            'E. 是《汉书》的作者'
                        ],
                        correctAnswer: ['A', 'B', 'C'],
                        explanation: '司马迁开创了纪传体史书体例，记录了从黄帝到汉武帝的历史，其作品被誉为"史家之绝唱，无韵之离骚"。'
                    }
                ]
            },
            set3: {
                name: '第三套',
                questions: [
                    {
                        id: 'chinese-set3-q1',
                        type: 'single',
                        title: '下列加点字注音正确的一项是( )。（3分）（1）引吭高歌 （2）缜密',
                        options: [
                            'A. kēng zhēn',
                            'B. zhēng zhēn',
                            'C. háng zhěn',
                            'D. háng zhěng'
                        ],
                        correctAnswer: 'C',
                        explanation: 'C选项的读音正确。'
                    },
                    {
                        id: 'chinese-set3-q2',
                        type: 'single',
                        title: '下列词语含有错别字的一项是( )。（3分）',
                        options: [
                            'A. 甘拜下风',
                            'B. 一愁莫展',
                            'C. 再接再厉',
                            'D. 人情世故'
                        ],
                        correctAnswer: 'B',
                        explanation: 'B选项中"一愁莫展"的"愁"应为"筹"。'
                    },
                    {
                        id: 'chinese-set3-q3',
                        type: 'single',
                        title: '下列加点的成语使用不适合的一项是( )。（3分）',
                        options: [
                            'A. 今天的演出盛况空前，出现万人空巷场景',
                            'B. 在我鼎力相助之下，小王这件事终于成功了',
                            'C. 他胸无城府，真诚待人，很受朋友的喜爱',
                            'D. 在这些作品中，只有小李的作品还差强人意'
                        ],
                        correctAnswer: 'B',
                        explanation: 'B选项中"鼎力相助"使用不当，"鼎力"是敬辞，用于请求或感谢别人的帮助。'
                    },
                    {
                        id: 'chinese-set3-q4',
                        type: 'single',
                        title: '下列各句中，没有语病的一项是( )。（3分）',
                        options: [
                            'A. 本刊稿酬标准按国家有关部门制定的标准参考执行',
                            'B. 为了防止他不再犯相同错误，妈妈严厉地批评了他',
                            'C. 运动会开始了，我们的心情和比赛十分激动和紧张',
                            'D. 我们要让传统文化更好地为社会的现代化提供支撑'
                        ],
                        correctAnswer: 'D',
                        explanation: 'D选项没有语病。'
                    },
                    {
                        id: 'chinese-set3-q5',
                        type: 'single',
                        title: '你想送一句话给好朋友表示对他事业的祝福，下列句子最适合的一项是( )。（3分）',
                        options: [
                            'A. 长风破浪会有时，直挂云帆济沧海',
                            'B. 沉舟侧畔千帆过，病树前头万木春',
                            'C. 莫愁前路无知己，天下谁人不识君',
                            'D. 海内存知己，天涯若比邻'
                        ],
                        correctAnswer: 'A',
                        explanation: 'A选项最适合表达对朋友事业的祝福。'
                    },
                    {
                        id: 'chinese-set3-q6',
                        type: 'single',
                        title: '依据"大学是否应清退成绩不合格学生"的民意调查材料（表格+饼图），饼状图中括号内应填入的内容是( )。（3分）',
                        options: [
                            'A. 要看成绩不合格的具体原因',
                            'B. 14%',
                            'C. 要看成绩不合格的具体原因，存在智力跟不上的原因',
                            'D. 成绩不合格的原因多样'
                        ],
                        correctAnswer: 'A',
                        explanation: '根据图表内容，饼状图括号内应填入"要看成绩不合格的具体原因"。'
                    },
                    {
                        id: 'chinese-set3-q7',
                        type: 'multiple',
                        title: '根据"大学是否应清退成绩不合格学生"的图表，对大家的态度分析准确的有( )（不定项选择）。（6分）',
                        options: [
                            'A. 明确表示支持的人超过半数',
                            'B. 不支持这件事情的人不到三成',
                            'C. 四成以上的人对学校的做法表示质疑',
                            'D. 17%的人认为大学不能仅以成绩作为评判标准',
                            'E. 表示支持的人认识到了这种清退有惩戒作用',
                            'F. 超过二成的人审慎考虑到了不合格的复杂成因'
                        ],
                        correctAnswer: ['A', 'D', 'E'],
                        explanation: '根据图表分析，ADE选项正确。'
                    },
                    {
                        id: 'chinese-set3-q8',
                        type: 'single',
                        title: '下列选项中，不属于第二届来华留学生征文大赛举办目的的一项是( )。（3分）',
                        options: [
                            'A. 展示中国改革开放后所取得的辉煌成就',
                            'B. 促进青年学生之间的学术、情感交流',
                            'C. 增进留学生对中国亲近、喜爱的情感',
                            'D. 加深留学生对中国四十年来发展的认知'
                        ],
                        correctAnswer: 'B',
                        explanation: 'B选项不是征文大赛的举办目的。'
                    },
                    {
                        id: 'chinese-set3-q9',
                        type: 'single',
                        title: '对来华留学生征文大赛通知中"统筹联络"的理解和分析不正确的一项是( )。（3分）',
                        options: [
                            'A. "统筹"指各院校统一安排规划此次活动',
                            'B. "联络"指联系相关负责人员承办此活动',
                            'C. 两个词都对各院校留学部提出了相关要求',
                            'D. "统筹联络"指各院校联合组织此次活动'
                        ],
                        correctAnswer: 'D',
                        explanation: 'D选项的理解和分析不正确。'
                    },
                    {
                        id: 'chinese-set3-q10',
                        type: 'single',
                        title: '与第二届来华留学生征文大赛的要求相一致的一项是( )。（3分）',
                        options: [
                            'A. 文章篇幅限800字，也可以使用英文撰写',
                            'B. 只要是来华的留学生均可参加此次征文活动',
                            'C. 除电子邮件外，还可以邮寄纸质稿件来投稿',
                            'D. 比赛除个人等第奖外，还设置了团队组织奖'
                        ],
                        correctAnswer: 'B',
                        explanation: 'B选项与征文大赛要求相一致。'
                    },
                    {
                        id: 'chinese-set3-q11',
                        type: 'single',
                        title: '下列文章最不适合第二届来华留学生征文大赛征稿的一项是( )。（3分）',
                        options: [
                            'A. 《在这里的美好遇见》',
                            'B. 《改革开放的春风十里》',
                            'C. 《论英美文化的差异》',
                            'D. 《我的留学故事》'
                        ],
                        correctAnswer: 'C',
                        explanation: 'C选项《论英美文化的差异》最不符合征文大赛的征稿要求。'
                    },
                    {
                        id: 'chinese-set3-q12',
                        type: 'single',
                        title: '可以替换"突显网络是另两大网络之间的桥梁"中"桥梁"的一项是( )。（3分）',
                        options: [
                            'A. 屏障',
                            'B. 基石',
                            'C. 支架',
                            'D. 纽带'
                        ],
                        correctAnswer: 'D',
                        explanation: 'D选项"纽带"可以替换"桥梁"，都表示连接作用。'
                    },
                    {
                        id: 'chinese-set3-q13',
                        type: 'single',
                        title: '根据"大脑创造活动三大网络系统"的文章，下列思维会激活大脑中的预设模式网络的是( )。（3分）',
                        options: [
                            'A. 回想童年全家出游的温馨画面',
                            'B. 计划自己的婚礼流程',
                            'C. 考虑下周去海边度假的安排',
                            'D. 评估自己买一本书的必要性'
                        ],
                        correctAnswer: 'A',
                        explanation: 'A选项会激活预设模式网络，这是关于回忆和想象力。'
                    },
                    {
                        id: 'chinese-set3-q14',
                        type: 'single',
                        title: '根据"大脑创造活动三大网络系统"的文章，下列哪一项不是控制网络在创造性思维过程中的作用( )。（3分）',
                        options: [
                            'A. 选取想法',
                            'B. 评估正确程度',
                            'C. 调整思路',
                            'D. 抑制某些思维'
                        ],
                        correctAnswer: 'A',
                        explanation: 'A选项"选取想法"不是控制网络的作用。'
                    },
                    {
                        id: 'chinese-set3-q15',
                        type: 'single',
                        title: '下列说法与"大脑创造活动三大网络系统"文章内容一致的一项是( )。（3分）',
                        options: [
                            'A. 记忆力与创造性思维没有关系',
                            'B. 控制网络能够让你关联已知想法',
                            'C. 天马行空的想象力训练是创造力的关键',
                            'D. 改变三大网络系统的关联可提高创造力'
                        ],
                        correctAnswer: 'D',
                        explanation: 'D选项与文章内容一致。'
                    }
                ]
            }
        }
    },
    math: {
        name: '数学',
        testSets: {
            set1: {
                name: '第一套',
                questions: [
                    {
                        id: 'math-set1-q1',
                        type: 'single',
                        title: '2 + 3 的结果是：',
                        options: [
                            'A. 5',
                            'B. 6',
                            'C. 4',
                            'D. 7'
                        ],
                        correctAnswer: 'A',
                        explanation: '2 加 3 等于 5。'
                    },
                    {
                        id: 'math-set1-q2',
                        type: 'single',
                        title: '6 × 7 的结果是：',
                        options: [
                            'A. 42',
                            'B. 36',
                            'C. 49',
                            'D. 40'
                        ],
                        correctAnswer: 'A',
                        explanation: '6 乘以 7 等于 42。'
                    },
                    {
                        id: 'math-set1-q3',
                        type: 'single',
                        title: '方程 2x + 3 = 11 的解是：',
                        options: [
                            'A. 3',
                            'B. 5',
                            'C. 4',
                            'D. 8'
                        ],
                        correctAnswer: 'C',
                        explanation: '2x = 8，x = 4。'
                    },
                    {
                        id: 'math-set1-q4',
                        type: 'single',
                        title: '下列数字中，属于质数的是：',
                        options: [
                            'A. 6',
                            'B. 9',
                            'C. 11',
                            'D. 15'
                        ],
                        correctAnswer: 'C',
                        explanation: '11 只有 1 和 11 两个因数，是质数。'
                    },
                    {
                        id: 'math-set1-q5',
                        type: 'single',
                        title: '√81 的值是：',
                        options: [
                            'A. 7',
                            'B. 8',
                            'C. 9',
                            'D. 10'
                        ],
                        correctAnswer: 'C',
                        explanation: '√81 = 9。'
                    },
                    {
                        id: 'math-set1-q6',
                        type: 'single',
                        title: '长为 5，宽为 8 的长方形面积是：',
                        options: [
                            'A. 13',
                            'B. 20',
                            'C. 40',
                            'D. 58'
                        ],
                        correctAnswer: 'C',
                        explanation: '面积 = 长 × 宽 = 5 × 8 = 40。'
                    },
                    {
                        id: 'math-set1-q7',
                        type: 'single',
                        title: '0.25 等于以下哪一个分数？',
                        options: [
                            'A. 1/2',
                            'B. 1/4',
                            'C. 2/3',
                            'D. 3/5'
                        ],
                        correctAnswer: 'B',
                        explanation: '0.25 = 25% = 1/4。'
                    },
                    {
                        id: 'math-set1-q8',
                        type: 'single',
                        title: '3/4 转化为小数是：',
                        options: [
                            'A. 0.25',
                            'B. 0.5',
                            'C. 0.75',
                            'D. 0.8'
                        ],
                        correctAnswer: 'C',
                        explanation: '3 ÷ 4 = 0.75。'
                    },
                    {
                        id: 'math-set1-q9',
                        type: 'single',
                        title: '一条直角三角形的两条直角边分别为 3 和 4，斜边长为：',
                        options: [
                            'A. 4',
                            'B. 5',
                            'C. 6',
                            'D. 7'
                        ],
                        correctAnswer: 'B',
                        explanation: '根据勾股定理，斜边=√(3²+4²)=5。'
                    },
                    {
                        id: 'math-set1-q10',
                        type: 'multiple',
                        title: '下列哪些数字是偶数？（可多选）',
                        options: [
                            'A. 3',
                            'B. 4',
                            'C. 7',
                            'D. 10'
                        ],
                        correctAnswer: ['B', 'D'],
                        explanation: '偶数能被2整除，此处为4和10。'
                    }
                ]
            },
            set2: {
                name: '第二套',
                questions: [
                    {
                        id: 'math-set2-q1',
                        type: 'single',
                        title: '5 的平方（5²）的值是：',
                        options: [
                            'A. 20',
                            'B. 25',
                            'C. 15',
                            'D. 30'
                        ],
                        correctAnswer: 'B',
                        explanation: '5² = 5 × 5 = 25。'
                    },
                    {
                        id: 'math-set2-q2',
                        type: 'single',
                        title: '9 ÷ 0.5 的结果是：',
                        options: [
                            'A. 4.5',
                            'B. 9',
                            'C. 18',
                            'D. 0.45'
                        ],
                        correctAnswer: 'C',
                        explanation: '除以0.5相当于乘以2，9 × 2 = 18。'
                    },
                    {
                        id: 'math-set2-q3',
                        type: 'single',
                        title: '解方程 3(x - 2) = 12，x 等于：',
                        options: [
                            'A. 4',
                            'B. 5',
                            'C. 6',
                            'D. 8'
                        ],
                        correctAnswer: 'C',
                        explanation: '3(x - 2) = 12 ⇒ x - 2 = 4 ⇒ x = 6。'
                    },
                    {
                        id: 'math-set2-q4',
                        type: 'single',
                        title: '函数 y = 2x - 1，当 x = 4 时，y = ',
                        options: [
                            'A. 5',
                            'B. 6',
                            'C. 7',
                            'D. 8'
                        ],
                        correctAnswer: 'C',
                        explanation: 'y = 2×4 - 1 = 7。'
                    },
                    {
                        id: 'math-set2-q5',
                        type: 'single',
                        title: '下列数列中能组成直角三角形三边的是：',
                        options: [
                            'A. 2, 3, 4',
                            'B. 4, 5, 8',
                            'C. 6, 8, 10',
                            'D. 5, 6, 8'
                        ],
                        correctAnswer: 'C',
                        explanation: '6² + 8² = 36 + 64 = 100 = 10²。'
                    },
                    {
                        id: 'math-set2-q6',
                        type: 'single',
                        title: '半径为 3 的圆的面积是：',
                        options: [
                            'A. 3π',
                            'B. 6π',
                            'C. 9π',
                            'D. 12π'
                        ],
                        correctAnswer: 'C',
                        explanation: '面积 = πr² = π × 3² = 9π。'
                    },
                    {
                        id: 'math-set2-q7',
                        type: 'single',
                        title: '不等式 x + 5 > 9 的解集是：',
                        options: [
                            'A. x > 3',
                            'B. x > 4',
                            'C. x ≥ 4',
                            'D. x ≥ 5'
                        ],
                        correctAnswer: 'B',
                        explanation: 'x + 5 > 9 ⇒ x > 4。'
                    },
                    {
                        id: 'math-set2-q8',
                        type: 'single',
                        title: '数列 2, 4, 8, 16, ( ) 的下一项是：',
                        options: [
                            'A. 20',
                            'B. 24',
                            'C. 30',
                            'D. 32'
                        ],
                        correctAnswer: 'D',
                        explanation: '等比数列，每项是上一项的2倍，故下一项为32。'
                    },
                    {
                        id: 'math-set2-q9',
                        type: 'multiple',
                        title: '下列哪些数字是 3 的倍数？（可多选）',
                        options: [
                            'A. 9',
                            'B. 14',
                            'C. 21',
                            'D. 28'
                        ],
                        correctAnswer: ['A', 'C'],
                        explanation: '9 和 21 能被3整除，分别等于3×3与3×7。'
                    },
                    {
                        id: 'math-set2-q10',
                        type: 'single',
                        title: '一个袋子中有 5 个红球和 3 个蓝球，任取 1 个，取到红球的概率是：',
                        options: [
                            'A. 3/8',
                            'B. 5/8',
                            'C. 1/2',
                            'D. 2/3'
                        ],
                        correctAnswer: 'B',
                        explanation: '概率 = 红球数 / 总数 = 5 / (5 + 3) = 5/8。'
                    }
                ]
            },
            set3: {
                name: '第三套',
                questions: [
                    {
                        id: 'math-set3-q1',
                        type: 'single',
                        title: '已知集合A={1,3}，集合B={1,2,3}，则A∩B=？',
                        options: [
                            'A. {1,2,3}',
                            'B. {1,3}',
                            'C. {2}',
                            'D. ∅'
                        ],
                        correctAnswer: 'B',
                        explanation: '交集是两集合共有的元素，A={1,3}与B={1,2,3}的公共元素为1和3。'
                    },
                    {
                        id: 'math-set3-q2',
                        type: 'single',
                        title: '计算：sin330° 等于多少？',
                        options: [
                            'A. -√3/2',
                            'B. -1/2',
                            'C. 1/2',
                            'D. √3/2'
                        ],
                        correctAnswer: 'B',
                        explanation: '330°=360°-30°，第四象限正弦为负，sin330°=-sin30°=-1/2。'
                    },
                    {
                        id: 'math-set3-q3',
                        type: 'single',
                        title: '已知双曲线方程为 x²/5 - y²/4 =1，则该双曲线的焦距是？',
                        options: [
                            'A. 1',
                            'B. 2',
                            'C. 3',
                            'D. 6'
                        ],
                        correctAnswer: 'D',
                        explanation: 'c²=a²+b²=5+4=9，故c=3，焦距=2c=6。'
                    },
                    {
                        id: 'math-set3-q4',
                        type: 'single',
                        title: '平行四边形ABCD中，以下关于向量的结论哪一项错误？',
                        options: [
                            'A. AB = DC',
                            'B. AB - AD = BD',
                            'C. AD + AB = AC',
                            'D. AD + CB = 0'
                        ],
                        correctAnswer: 'B',
                        explanation: 'AB-AD=DB，其方向与BD相反，因此该选项错误。'
                    },
                    {
                        id: 'math-set3-q5',
                        type: 'single',
                        title: '设复数 z = 3 - 4i，则 \\bar{z} / |z| 等于？',
                        options: [
                            'A. 3/25 + 4/25i',
                            'B. -3/25 - 4/25i',
                            'C. 3/5 + 4/5i',
                            'D. -3/5 - 4/5i'
                        ],
                        correctAnswer: 'C',
                        explanation: '共轭复数 \\bar{z} = 3 + 4i，|z|=5，故 \\bar{z} / |z| = (3 + 4i)/5。'
                    },
                    {
                        id: 'math-set3-q6',
                        type: 'single',
                        title: '下列函数中，在区间 (-∞, 0) 上为增函数的是？',
                        options: [
                            'A. y = 1',
                            'B. y = 2 - x',
                            'C. y = (x + 1)/x',
                            'D. y = -x² + 2x + 1'
                        ],
                        correctAnswer: 'D',
                        explanation: 'y = -x² + 2x + 1 在 x < 1 时递增，因此在 (-∞,0) 内递增。'
                    },
                    {
                        id: 'math-set3-q7',
                        type: 'single',
                        title: '已知等差数列 {aₙ} 的公差为 d，a₁=1，且 limₙ→∞ Sₙ/(n²+2n)=3，则 d 等于？',
                        options: [
                            'A. 6',
                            'B. 4',
                            'C. 3',
                            'D. 2'
                        ],
                        correctAnswer: 'A',
                        explanation: '等差数列前 n 项和为 n + n(n-1)d/2，极限结果为 d/2=3，故 d=6。'
                    },
                    {
                        id: 'math-set3-q8',
                        type: 'single',
                        title: '设 p：x>3，q：x>2，则“p”是“q”的什么条件？',
                        options: [
                            'A. 充分非必要条件',
                            'B. 必要非充分条件',
                            'C. 充要条件',
                            'D. 既非充分又非必要条件'
                        ],
                        correctAnswer: 'A',
                        explanation: 'x>3 能推出 x>2，为充分条件；x>2 不一定推出 x>3，非必要条件。'
                    },
                    {
                        id: 'math-set3-q9',
                        type: 'single',
                        title: '电影院从 5 部新片中任选 3 部安排上午、下午、晚上放映，不同排片方法数为？',
                        options: [
                            'A. 180',
                            'B. 90',
                            'C. 60',
                            'D. 10'
                        ],
                        correctAnswer: 'C',
                        explanation: '排列数 A(5,3)=5×4×3=60。'
                    },
                    {
                        id: 'math-set3-q10',
                        type: 'single',
                        title: '△ABC 中，A(2,1)，B 在直线 y=x 上，C 在 y 轴上，周长最小值为？',
                        options: [
                            'A. √6',
                            'B. 2√2',
                            'C. √10',
                            'D. 2√3'
                        ],
                        correctAnswer: 'C',
                        explanation: '利用对称法最短路径为 A 的对称点 A₁(-2,1) 与 A₂(1,2) 的距离 √10。'
                    }
                ]
            }
        }
    },
    physics: {
        name: '物理',
        testSets: {
            set1: {
                name: '第一套',
                questions: [
                    {
                        id: 'physics-set1-q1',
                        type: 'single',
                        title: '国际单位制中，力的单位是：',
                        options: [
                            'A. 牛顿 (N)',
                            'B. 焦耳 (J)',
                            'C. 瓦特 (W)',
                            'D. 帕斯卡 (Pa)'
                        ],
                        correctAnswer: 'A',
                        explanation: '牛顿 (N) 是力的单位。'
                    },
                    {
                        id: 'physics-set1-q2',
                        type: 'single',
                        title: '速度的计算公式是：',
                        options: [
                            'A. v = s / t',
                            'B. v = a × t',
                            'C. v = F / m',
                            'D. v = m / s'
                        ],
                        correctAnswer: 'A',
                        explanation: '速度等于位移除以时间。'
                    },
                    {
                        id: 'physics-set1-q3',
                        type: 'single',
                        title: '光在以下哪种介质中传播速度最快？',
                        options: [
                            'A. 空气',
                            'B. 水',
                            'C. 玻璃',
                            'D. 真空'
                        ],
                        correctAnswer: 'D',
                        explanation: '光在真空中的传播速度最大。'
                    },
                    {
                        id: 'physics-set1-q4',
                        type: 'single',
                        title: '物体自由落体运动时，加速度的近似值是：',
                        options: [
                            'A. 3.8 m/s²',
                            'B. 6.5 m/s²',
                            'C. 9.8 m/s²',
                            'D. 12.5 m/s²'
                        ],
                        correctAnswer: 'C',
                        explanation: '地球表面附近自由落体加速度约为 9.8 m/s²。'
                    },
                    {
                        id: 'physics-set1-q5',
                        type: 'multiple',
                        title: '下列哪些属于能量的形式？（可多选）',
                        options: [
                            'A. 动能',
                            'B. 势能',
                            'C. 电能',
                            'D. 压强'
                        ],
                        correctAnswer: ['A', 'B', 'C'],
                        explanation: '动能、势能、电能都是能量形式，压强是物理量。'
                    },
                    {
                        id: 'physics-set1-q6',
                        type: 'single',
                        title: '测量电流的仪器是：',
                        options: [
                            'A. 电压表',
                            'B. 温度计',
                            'C. 电流表',
                            'D. 天平'
                        ],
                        correctAnswer: 'C',
                        explanation: '电流表用于测量电流强度。'
                    },
                    {
                        id: 'physics-set1-q7',
                        type: 'single',
                        title: '下列关于光的反射定律描述正确的是：',
                        options: [
                            'A. 入射角等于反射角',
                            'B. 入射角大于反射角',
                            'C. 入射光线、反射光线与法线处于不同平面',
                            'D. 入射角小于反射角'
                        ],
                        correctAnswer: 'A',
                        explanation: '光的反射定律：入射角等于反射角，三线共面。'
                    },
                    {
                        id: 'physics-set1-q8',
                        type: 'single',
                        title: '两个电阻串联时，总电阻的计算方式是：',
                        options: [
                            'A. R = R1 + R2',
                            'B. 1/R = 1/R1 + 1/R2',
                            'C. R = R1 - R2',
                            'D. R = R1 × R2'
                        ],
                        correctAnswer: 'A',
                        explanation: '串联电阻的总电阻等于各电阻之和。'
                    },
                    {
                        id: 'physics-set1-q9',
                        type: 'single',
                        title: '声音的传播需要介质，下列哪种情况无法传播声音？',
                        options: [
                            'A. 空气中',
                            'B. 水中',
                            'C. 真空中',
                            'D. 固体中'
                        ],
                        correctAnswer: 'C',
                        explanation: '声音无法在真空中传播，需要介质。'
                    },
                    {
                        id: 'physics-set1-q10',
                        type: 'multiple',
                        title: '下列现象中，属于力的作用效果的有？（可多选）',
                        options: [
                            'A. 使物体改变形状',
                            'B. 使物体改变运动状态',
                            'C. 使物体温度升高',
                            'D. 使物体发生化学反应'
                        ],
                        correctAnswer: ['A', 'B'],
                        explanation: '力可以使物体变形或改变运动状态，温度和化学反应不是直接效果。'
                    }
                ]
            },
            set2: {
                name: '第二套',
                questions: [
                    {
                        id: 'physics-set2-q1',
                        type: 'single',
                        title: '电压的国际单位是：',
                        options: [
                            'A. 安培 (A)',
                            'B. 伏特 (V)',
                            'C. 瓦特 (W)',
                            'D. 欧姆 (Ω)'
                        ],
                        correctAnswer: 'B',
                        explanation: '伏特 (V) 是电压的单位。'
                    },
                    {
                        id: 'physics-set2-q2',
                        type: 'single',
                        title: '物体做匀速直线运动时，下列说法正确的是：',
                        options: [
                            'A. 速度大小保持不变',
                            'B. 加速度恒定且不为零',
                            'C. 受到的合外力一定不为零',
                            'D. 速度方向不断改变'
                        ],
                        correctAnswer: 'A',
                        explanation: '匀速直线运动的速度大小和方向均保持不变。'
                    },
                    {
                        id: 'physics-set2-q3',
                        type: 'single',
                        title: '光的色散现象通常发生在：',
                        options: [
                            'A. 通过棱镜',
                            'B. 通过平面镜',
                            'C. 通过凸透镜',
                            'D. 通过凹透镜'
                        ],
                        correctAnswer: 'A',
                        explanation: '白光通过棱镜会产生色散现象。'
                    },
                    {
                        id: 'physics-set2-q4',
                        type: 'single',
                        title: '下列哪种粒子带正电？',
                        options: [
                            'A. 电子',
                            'B. 中子',
                            'C. 质子',
                            'D. 光子'
                        ],
                        correctAnswer: 'C',
                        explanation: '质子带正电，电子带负电，中子不带电。'
                    },
                    {
                        id: 'physics-set2-q5',
                        type: 'multiple',
                        title: '下列哪些属于机械波？（可多选）',
                        options: [
                            'A. 声波',
                            'B. 水波',
                            'C. 光波',
                            'D. 地震波'
                        ],
                        correctAnswer: ['A', 'B', 'D'],
                        explanation: '声波、水波、地震波都需要介质传播，属于机械波。'
                    },
                    {
                        id: 'physics-set2-q6',
                        type: 'single',
                        title: '为了减小压强，人们常采用的措施是：',
                        options: [
                            'A. 将滑雪板做得更宽',
                            'B. 把刀磨得更锋利',
                            'C. 使用尖头的钉子',
                            'D. 减小受力面积'
                        ],
                        correctAnswer: 'A',
                        explanation: '增大受力面积可以减小压强，滑雪板做宽可防止陷入雪中。'
                    },
                    {
                        id: 'physics-set2-q7',
                        type: 'single',
                        title: '在闭合电路中，电流从电源的哪个极流出？',
                        options: [
                            'A. 正极',
                            'B. 负极',
                            'C. 两极同时',
                            'D. 与电路无关'
                        ],
                        correctAnswer: 'A',
                        explanation: '按约定方向，电流从电源正极流出，经电路回到负极。'
                    },
                    {
                        id: 'physics-set2-q8',
                        type: 'single',
                        title: '物体的密度计算公式是：',
                        options: [
                            'A. ρ = m / V',
                            'B. ρ = V / m',
                            'C. ρ = m × V',
                            'D. ρ = m - V'
                        ],
                        correctAnswer: 'A',
                        explanation: '密度等于质量除以体积。'
                    },
                    {
                        id: 'physics-set2-q9',
                        type: 'single',
                        title: '以下哪种做法可以有效减少静电危害？',
                        options: [
                            'A. 穿化纤衣服',
                            'B. 保持空气湿润',
                            'C. 在地毯上快速移动',
                            'D. 频繁摩擦塑料制品'
                        ],
                        correctAnswer: 'B',
                        explanation: '保持空气湿润可以加速静电泄露，减少危害。'
                    },
                    {
                        id: 'physics-set2-q10',
                        type: 'multiple',
                        title: '下列工具中，利用杠杆原理的有？（可多选）',
                        options: [
                            'A. 钳子',
                            'B. 剪刀',
                            'C. 滑轮',
                            'D. 撬棍'
                        ],
                        correctAnswer: ['A', 'B', 'D'],
                        explanation: '钳子、剪刀、撬棍都利用杠杆原理；滑轮利用转动。'
                    }
                ]
            }
        }
    },
    chemistry: {
        name: '化学',
        testSets: {
            set1: {
                name: '第一套',
                questions: [
                    {
                        id: 'chemistry-set1-q1',
                        type: 'single',
                        title: '水的化学式是：',
                        options: [
                            'A. H2O',
                            'B. CO2',
                            'C. H2O2',
                            'D. NaCl'
                        ],
                        correctAnswer: 'A',
                        explanation: '水由两个氢原子和一个氧原子组成，化学式为 H2O。'
                    },
                    {
                        id: 'chemistry-set1-q2',
                        type: 'single',
                        title: '下列物质中，属于单质的是：',
                        options: [
                            'A. O2',
                            'B. CO2',
                            'C. H2O',
                            'D. NaCl'
                        ],
                        correctAnswer: 'A',
                        explanation: 'O2 由同种元素组成，为单质，其余为化合物。'
                    },
                    {
                        id: 'chemistry-set1-q3',
                        type: 'single',
                        title: '石蕊试剂遇到酸性溶液会呈现的颜色是：',
                        options: [
                            'A. 红色',
                            'B. 蓝色',
                            'C. 黄色',
                            'D. 无色'
                        ],
                        correctAnswer: 'A',
                        explanation: '石蕊试剂遇酸变红，遇碱变蓝。'
                    },
                    {
                        id: 'chemistry-set1-q4',
                        type: 'single',
                        title: 'NaCl 属于哪一类化合物？',
                        options: [
                            'A. 盐',
                            'B. 酸',
                            'C. 碱',
                            'D. 氧化物'
                        ],
                        correctAnswer: 'A',
                        explanation: 'NaCl 是由酸根和金属离子组成的盐。'
                    },
                    {
                        id: 'chemistry-set1-q5',
                        type: 'single',
                        title: '下列反应属于化合反应的是：',
                        options: [
                            'A. 2H2 + O2 → 2H2O',
                            'B. CaCO3 → CaO + CO2',
                            'C. 2KClO3 → 2KCl + 3O2',
                            'D. Zn + 2HCl → ZnCl2 + H2'
                        ],
                        correctAnswer: 'A',
                        explanation: '化合反应指两个或多个物质生成一种新物质，选项A符合。'
                    },
                    {
                        id: 'chemistry-set1-q6',
                        type: 'multiple',
                        title: '下列哪些属于常见的金属元素？（可多选）',
                        options: [
                            'A. 铁',
                            'B. 铜',
                            'C. 氧',
                            'D. 钠'
                        ],
                        correctAnswer: ['A', 'B', 'D'],
                        explanation: '铁、铜、钠为金属元素，氧为非金属元素。'
                    },
                    {
                        id: 'chemistry-set1-q7',
                        type: 'single',
                        title: '在化学方程式中，表示固体状态的符号是：',
                        options: [
                            'A. (s)',
                            'B. (l)',
                            'C. (g)',
                            'D. (aq)'
                        ],
                        correctAnswer: 'A',
                        explanation: '固体用 (s) 表示，(l) 表示液体，(g) 表示气体，(aq) 表示水溶液。'
                    },
                    {
                        id: 'chemistry-set1-q8',
                        type: 'single',
                        title: '常温下呈气态的物质是：',
                        options: [
                            'A. 氯化钠',
                            'B. 氧气',
                            'C. 硫粉',
                            'D. 铁'
                        ],
                        correctAnswer: 'B',
                        explanation: '氧气在常温常压下为气体，其余为固体。'
                    },
                    {
                        id: 'chemistry-set1-q9',
                        type: 'multiple',
                        title: '下列措施中，可以加快化学反应速率的有？（可多选）',
                        options: [
                            'A. 升高温度',
                            'B. 降低反应物浓度',
                            'C. 增大反应物接触面积',
                            'D. 使用催化剂'
                        ],
                        correctAnswer: ['A', 'C', 'D'],
                        explanation: '升温、增大接触面积、使用催化剂都能加快反应，降低浓度会减慢反应。'
                    },
                    {
                        id: 'chemistry-set1-q10',
                        type: 'single',
                        title: '关于溶解度的说法正确的是：',
                        options: [
                            'A. 溶解度与温度有关',
                            'B. 溶解度与溶剂无关',
                            'C. 固体溶质的溶解度不随温度变化',
                            'D. 所有气体溶质的溶解度随温度升高而增大'
                        ],
                        correctAnswer: 'A',
                        explanation: '一般情况下，溶解度受温度影响。'
                    }
                ]
            },
            set2: {
                name: '第二套',
                questions: [
                    {
                        id: 'chemistry-set2-q1',
                        type: 'single',
                        title: '检验 CO2 常用的方法是：',
                        options: [
                            'A. 点燃观察火焰颜色',
                            'B. 使澄清石灰水变浑浊',
                            'C. 闻气味',
                            'D. 观察是否有火花'
                        ],
                        correctAnswer: 'B',
                        explanation: 'CO2 能使澄清石灰水变浑浊，这是常见检验方法。'
                    },
                    {
                        id: 'chemistry-set2-q2',
                        type: 'single',
                        title: '下列离子中，属于阳离子的是：',
                        options: [
                            'A. Cl-',
                            'B. SO4^2-',
                            'C. Na+',
                            'D. OH-'
                        ],
                        correctAnswer: 'C',
                        explanation: 'Na+ 带正电，为阳离子，其余为阴离子。'
                    },
                    {
                        id: 'chemistry-set2-q3',
                        type: 'single',
                        title: 'pH = 7 的溶液通常被认为是：',
                        options: [
                            'A. 酸性',
                            'B. 碱性',
                            'C. 中性',
                            'D. 强酸'
                        ],
                        correctAnswer: 'C',
                        explanation: 'pH 等于 7 时溶液呈中性。'
                    },
                    {
                        id: 'chemistry-set2-q4',
                        type: 'single',
                        title: '下列反应属于氧化还原反应的是：',
                        options: [
                            'A. 2Mg + O2 → 2MgO',
                            'B. AgNO3 + NaCl → AgCl + NaNO3',
                            'C. HCl + NaOH → NaCl + H2O',
                            'D. CaCO3 → CaO + CO2'
                        ],
                        correctAnswer: 'A',
                        explanation: '镁被氧化、氧被还原，属于氧化还原反应。'
                    },
                    {
                        id: 'chemistry-set2-q5',
                        type: 'single',
                        title: '关于催化剂的说法正确的是：',
                        options: [
                            'A. 催化剂改变反应产物',
                            'B. 反应前后质量不变',
                            'C. 催化剂在反应中被完全消耗',
                            'D. 催化剂只能加快反应不能减慢'
                        ],
                        correctAnswer: 'B',
                        explanation: '催化剂在反应中质量不变，可加快或减慢反应速率。'
                    },
                    {
                        id: 'chemistry-set2-q6',
                        type: 'multiple',
                        title: '下列物质中，属于碱的有？（可多选）',
                        options: [
                            'A. NaOH',
                            'B. KOH',
                            'C. HCl',
                            'D. Ca(OH)2'
                        ],
                        correctAnswer: ['A', 'B', 'D'],
                        explanation: 'NaOH、KOH、Ca(OH)2 为碱，HCl 为酸。'
                    },
                    {
                        id: 'chemistry-set2-q7',
                        type: 'single',
                        title: '将铁钉放入稀盐酸中，产生的气体是：',
                        options: [
                            'A. 氧气',
                            'B. 氢气',
                            'C. 二氧化碳',
                            'D. 氯气'
                        ],
                        correctAnswer: 'B',
                        explanation: '铁与酸反应生成氯化铁和氢气。'
                    },
                    {
                        id: 'chemistry-set2-q8',
                        type: 'single',
                        title: '粮食发酵过程中主要发生的化学变化是：',
                        options: [
                            'A. 氧化反应',
                            'B. 中和反应',
                            'C. 产生酒精的发酵反应',
                            'D. 升华反应'
                        ],
                        correctAnswer: 'C',
                        explanation: '发酵使淀粉或糖类转化为酒精和二氧化碳。'
                    },
                    {
                        id: 'chemistry-set2-q9',
                        type: 'multiple',
                        title: '下列措施中，可以防止金属铁生锈的有？（可多选）',
                        options: [
                            'A. 刷防锈漆',
                            'B. 保持表面干燥',
                            'C. 长期浸泡在水中',
                            'D. 镀上一层锌'
                        ],
                        correctAnswer: ['A', 'B', 'D'],
                        explanation: '刷漆、保持干燥、镀锌都可防锈，长期浸水反而加速生锈。'
                    },
                    {
                        id: 'chemistry-set2-q10',
                        type: 'multiple',
                        title: '下列关于分子和原子的说法正确的是？（可多选）',
                        options: [
                            'A. 分子由原子组成',
                            'B. 原子可以再分成更小的粒子',
                            'C. 分子是保持物质化学性质的最小粒子',
                            'D. 原子在化学反应中完全消失'
                        ],
                        correctAnswer: ['A', 'C'],
                        explanation: '分子由原子组成并保持物质性质，原子不会在化学反应中消失。'
                    }
                ]
            }
        }
    }
};

// ========== 科目键值映射 ==========
const subjectKeyMap = {
    '中文': 'chinese',
    '语文': 'chinese',
    'chinese': 'chinese',
    '数学': 'math',
    'math': 'math',
    '物理': 'physics',
    'physics': 'physics',
    '化学': 'chemistry',
    'chemistry': 'chemistry'
};

// ========== 练习状态管理 ==========
let timerInterval = null;

const practiceState = {
    currentSubject: 'chinese',
    currentTestSet: 'set1',
    currentQuestionIndex: 0,
    answers: {},
    markedQuestions: new Set(),
    startTime: null,
    timeRemaining: 60 * 60,
    isSubmitted: false
};

// ========== 页面初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);

    const subjectParam = urlParams.get('subject');
    const resolvedSubject = resolveSubjectKey(subjectParam);
    if (resolvedSubject && subjectTestSets[resolvedSubject]) {
        practiceState.currentSubject = resolvedSubject;
    }

    const subjectConfig = getCurrentSubjectConfig();
    const testSetParam = urlParams.get('set');
    if (testSetParam && subjectConfig.testSets[testSetParam]) {
        practiceState.currentTestSet = testSetParam;
    } else {
        practiceState.currentTestSet = Object.keys(subjectConfig.testSets)[0];
    }

    resetPracticeState();
    loadStoredState();

    initSubjectSelector();
    initTestSetSelector();
    initTimer();
    initQuestions();
    initNavigation();
    initAnswerHandlers();
    initActionButtons();
    initModalHandlers();
    updateProgress();
    updateSubjectTitle();

    console.log('模拟练习页面初始化完成');
});

// ========== 科目与套题选择 ==========
function initSubjectSelector() {
    const container = document.getElementById('subjectButtons');
    if (!container) return;
    container.innerHTML = '';

    Object.entries(subjectTestSets).forEach(([subjectKey, config]) => {
        const button = document.createElement('button');
        button.className = 'subject-btn';
        button.textContent = config.name;
        button.dataset.subjectKey = subjectKey;
        if (subjectKey === practiceState.currentSubject) {
            button.classList.add('active');
        }
        button.addEventListener('click', function() {
            switchSubject(subjectKey);
        });
        container.appendChild(button);
    });
}

function switchSubject(subjectKey) {
    if (subjectKey === practiceState.currentSubject) {
        return;
    }
    const targetConfig = subjectTestSets[subjectKey];
    if (!targetConfig) {
        console.warn('未知科目:', subjectKey);
        return;
    }

    if (!practiceState.isSubmitted && hasActiveProgress()) {
        const confirmSwitch = confirm(`确定要切换到${targetConfig.name}科目吗？当前未提交的答题记录将被清除。`);
        if (!confirmSwitch) {
            initSubjectSelector();
            return;
        }
    }

    clearStoredState(practiceState.currentSubject, practiceState.currentTestSet);

    practiceState.currentSubject = subjectKey;
    const testSetKeys = Object.keys(targetConfig.testSets);
    practiceState.currentTestSet = testSetKeys[0];

    resetPracticeState();
    loadStoredState();

    initSubjectSelector();
    initTestSetSelector();
    initTimer();
    initQuestions();
    updateProgress();
    updateSubjectTitle();
}

function initTestSetSelector() {
    const container = document.getElementById('testSetButtons');
    if (!container) return;
    container.innerHTML = '';

    const testSets = getCurrentTestSets();
    Object.entries(testSets).forEach(([setKey, config]) => {
        const button = document.createElement('button');
        button.className = 'test-set-btn';
        button.textContent = config.name;
        button.dataset.setKey = setKey;
        if (setKey === practiceState.currentTestSet) {
            button.classList.add('active');
        }
        button.addEventListener('click', function() {
            switchTestSet(setKey);
        });
        container.appendChild(button);
    });
}

function switchTestSet(setKey) {
    if (setKey === practiceState.currentTestSet) {
        return;
    }
    const testSets = getCurrentTestSets();
    const targetSet = testSets[setKey];
    if (!targetSet) {
        console.warn('未知套题:', setKey);
        return;
    }

    if (!practiceState.isSubmitted && hasActiveProgress()) {
        const confirmSwitch = confirm(`确定要切换到${targetSet.name}吗？当前未提交的答题记录将被清除。`);
        if (!confirmSwitch) {
            initTestSetSelector();
            return;
        }
    }

    clearStoredState(practiceState.currentSubject, practiceState.currentTestSet);

    practiceState.currentTestSet = setKey;
    resetPracticeState();
    loadStoredState();

    initTestSetSelector();
    initTimer();
    initQuestions();
    updateProgress();
    updateSubjectTitle();
}

// ========== 数据访问辅助函数 ==========
function resolveSubjectKey(value) {
    if (!value) return null;
    const trimmed = value.trim();
    if (subjectKeyMap[trimmed]) {
        return subjectKeyMap[trimmed];
    }
    const lower = trimmed.toLowerCase();
    if (subjectKeyMap[lower]) {
        return subjectKeyMap[lower];
    }
    return null;
}

function getCurrentSubjectConfig() {
    return subjectTestSets[practiceState.currentSubject] || subjectTestSets.chinese;
}

function getCurrentTestSets() {
    const subjectConfig = getCurrentSubjectConfig();
    return subjectConfig.testSets;
}

function getCurrentTestSetConfig() {
    const testSets = getCurrentTestSets();
    return testSets[practiceState.currentTestSet];
}

function getCurrentQuestions() {
    const testSetConfig = getCurrentTestSetConfig();
    return testSetConfig ? testSetConfig.questions : [];
}

function resetPracticeState() {
    practiceState.currentQuestionIndex = 0;
    practiceState.answers = {};
    practiceState.markedQuestions = new Set();
    practiceState.timeRemaining = 60 * 60;
    practiceState.isSubmitted = false;
}

function hasActiveProgress() {
    const hasAnswers = Object.keys(practiceState.answers).length > 0;
    const hasMarks = practiceState.markedQuestions.size > 0;
    return hasAnswers || hasMarks;
}

// ========== 题目初始化与显示 ==========
function initQuestions() {
    const questions = getCurrentQuestions();
    const totalElement = document.getElementById('totalQuestions');
    if (totalElement) {
        totalElement.textContent = questions.length;
    }
    practiceState.currentQuestionIndex = 0;
    showQuestion(practiceState.currentQuestionIndex);
    generateQuestionGrid();
}

function showQuestion(index) {
    const questions = getCurrentQuestions();
    if (index < 0 || index >= questions.length) {
        console.error('题目索引超出范围：', index);
        return;
    }

    practiceState.currentQuestionIndex = index;
    const question = questions[index];

    const currentElement = document.getElementById('currentQuestionNum');
    if (currentElement) {
        currentElement.textContent = index + 1;
    }

    const typeElement = document.getElementById('questionType');
    if (typeElement) {
        typeElement.textContent = question.type === 'single' ? '单选题' : '多选题';
    }

    const titleElement = document.getElementById('questionTitle');
    if (titleElement) {
        titleElement.textContent = question.title;
    }

    generateOptions(question);
    updateMarkButton(question.id);
    updateNavButtons();
    updateQuestionGrid();
}

function generateOptions(question) {
    const optionsContainer = document.getElementById('questionOptions');
    if (!optionsContainer) return;
    optionsContainer.innerHTML = '';

    const userAnswer = practiceState.answers[question.id];

    question.options.forEach((optionText, index) => {
        const optionValue = String.fromCharCode(65 + index);
        const optionItem = document.createElement('div');
        optionItem.className = 'option-item';

        const input = document.createElement('input');
        input.type = question.type === 'single' ? 'radio' : 'checkbox';
        input.name = question.id;
        input.id = `${question.id}-option-${index}`;
        input.className = question.type === 'single' ? 'option-radio' : 'option-checkbox';
        input.value = optionValue;

        if (question.type === 'single') {
            input.checked = userAnswer === optionValue;
        } else if (Array.isArray(userAnswer)) {
            input.checked = userAnswer.includes(optionValue);
        }

        const label = document.createElement('label');
        label.className = 'option-label';
        label.htmlFor = input.id;
        label.textContent = optionText;

        input.addEventListener('change', function() {
            handleAnswerChange(question.id, question.type, optionValue, input.checked);
        });

        optionItem.addEventListener('click', function(event) {
            if (event.target.tagName !== 'INPUT') {
                input.click();
            }
        });

        optionItem.appendChild(input);
        optionItem.appendChild(label);
        optionsContainer.appendChild(optionItem);
    });

    updateOptionStyles();
}

function handleAnswerChange(questionId, questionType, optionValue, isChecked) {
    if (questionType === 'single') {
        practiceState.answers[questionId] = optionValue;
    } else if (questionType === 'multiple') {
        if (!Array.isArray(practiceState.answers[questionId])) {
            practiceState.answers[questionId] = [];
        }
        if (isChecked) {
            if (!practiceState.answers[questionId].includes(optionValue)) {
                practiceState.answers[questionId].push(optionValue);
            }
        } else {
            practiceState.answers[questionId] = practiceState.answers[questionId].filter(value => value !== optionValue);
            if (practiceState.answers[questionId].length === 0) {
                delete practiceState.answers[questionId];
            }
        }
    }

    updateOptionStyles();
    updateProgress();
    updateQuestionGrid();
    saveCurrentState();
}

function updateOptionStyles() {
    const optionItems = document.querySelectorAll('#questionOptions .option-item');
    optionItems.forEach(item => {
        const input = item.querySelector('input');
        if (input && input.checked) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

// ========== 导航功能 ==========
function initNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (practiceState.currentQuestionIndex > 0) {
                showQuestion(practiceState.currentQuestionIndex - 1);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const questions = getCurrentQuestions();
            if (practiceState.currentQuestionIndex < questions.length - 1) {
                showQuestion(practiceState.currentQuestionIndex + 1);
            }
        });
    }
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const questions = getCurrentQuestions();

    if (prevBtn) {
        prevBtn.disabled = practiceState.currentQuestionIndex === 0 || practiceState.isSubmitted;
    }

    if (nextBtn) {
        nextBtn.disabled = practiceState.currentQuestionIndex === questions.length - 1 || practiceState.isSubmitted;
    }
}

function generateQuestionGrid() {
    const gridContainer = document.getElementById('questionGrid');
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    const questions = getCurrentQuestions();
    questions.forEach((question, index) => {
        const button = document.createElement('button');
        button.className = 'question-btn';
        button.textContent = index + 1;
        button.dataset.questionIndex = index;
        button.disabled = practiceState.isSubmitted;
        button.addEventListener('click', function() {
            if (!practiceState.isSubmitted) {
                showQuestion(index);
            }
        });
        gridContainer.appendChild(button);
    });

    updateQuestionGrid();
}

function updateQuestionGrid() {
    const buttons = document.querySelectorAll('.question-btn');
    const questions = getCurrentQuestions();

    buttons.forEach((button, index) => {
        const questionId = questions[index] ? questions[index].id : null;
        button.classList.remove('current', 'answered', 'marked');
        button.disabled = practiceState.isSubmitted;

        if (index === practiceState.currentQuestionIndex) {
            button.classList.add('current');
        }

        if (questionId) {
            const answer = practiceState.answers[questionId];
            if (typeof answer === 'string' && answer.trim() !== '') {
                button.classList.add('answered');
            } else if (Array.isArray(answer) && answer.length > 0) {
                button.classList.add('answered');
            }

            if (practiceState.markedQuestions.has(questionId)) {
                button.classList.add('marked');
            }
        }
    });
}

// ========== 答题操作 ==========
function initAnswerHandlers() {
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            const questions = getCurrentQuestions();
            const currentQuestion = questions[practiceState.currentQuestionIndex];
            if (currentQuestion) {
                delete practiceState.answers[currentQuestion.id];
                showQuestion(practiceState.currentQuestionIndex);
                updateProgress();
                updateQuestionGrid();
                saveCurrentState();
            }
        });
    }

    const markBtn = document.getElementById('markBtn');
    if (markBtn) {
        markBtn.addEventListener('click', function() {
            const questions = getCurrentQuestions();
            const currentQuestion = questions[practiceState.currentQuestionIndex];
            if (!currentQuestion) return;

            if (practiceState.markedQuestions.has(currentQuestion.id)) {
                practiceState.markedQuestions.delete(currentQuestion.id);
            } else {
                practiceState.markedQuestions.add(currentQuestion.id);
            }

            updateMarkButton(currentQuestion.id);
            updateQuestionGrid();
            updateProgress();
            saveCurrentState();
        });
    }
}

function updateMarkButton(questionId) {
    const markBtn = document.getElementById('markBtn');
    const markText = document.getElementById('markText');
    if (!markBtn || !markText) return;

    if (practiceState.markedQuestions.has(questionId)) {
        markBtn.classList.add('marked');
        markText.textContent = '取消标记';
    } else {
        markBtn.classList.remove('marked');
        markText.textContent = '标记题目';
    }
}

// ========== 计时器 ==========
function initTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    practiceState.startTime = Date.now();
    updateTimerDisplay();

    timerInterval = setInterval(function() {
        if (practiceState.isSubmitted) {
            clearInterval(timerInterval);
            timerInterval = null;
            return;
        }

        practiceState.timeRemaining = Math.max(practiceState.timeRemaining - 1, 0);
        updateTimerDisplay();

        if (practiceState.timeRemaining <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert('时间已到，系统将自动提交试卷！');
            submitPractice();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timerDisplay');
    if (!timerDisplay) return;

    const minutes = Math.floor(practiceState.timeRemaining / 60);
    const seconds = practiceState.timeRemaining % 60;

    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (practiceState.timeRemaining <= 600 && !practiceState.isSubmitted) {
        timerDisplay.classList.add('warning');
    } else {
        timerDisplay.classList.remove('warning');
    }
}

// ========== 操作按钮 ==========
function initActionButtons() {
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            showSubmitModal();
        });
    }

    const checkAnswerBtn = document.getElementById('checkAnswerBtn');
    if (checkAnswerBtn) {
        checkAnswerBtn.addEventListener('click', function() {
            showAnswerModal();
        });
    }

    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            if (confirm('确定要重新开始吗？这将清除当前科目与套题的答题记录和计时。')) {
                clearStoredState(practiceState.currentSubject, practiceState.currentTestSet);
                resetPracticeState();
                initTimer();
                initQuestions();
                updateProgress();
                updateSubjectTitle();
                saveCurrentState();
            }
        });
    }

    const backHomeBtn = document.getElementById('backHomeBtn');
    if (backHomeBtn) {
        backHomeBtn.addEventListener('click', function() {
            if (confirm('确定要返回首页吗？未提交的答题记录将被清除。')) {
                window.location.href = 'index.html';
            }
        });
    }
}

// ========== 提交与弹窗 ==========
function initModalHandlers() {
    const submitModal = document.getElementById('submitModal');
    const cancelSubmitBtn = document.getElementById('cancelSubmitBtn');
    const confirmSubmitBtn = document.getElementById('confirmSubmitBtn');

    if (cancelSubmitBtn) {
        cancelSubmitBtn.addEventListener('click', function() {
            submitModal.style.display = 'none';
        });
    }

    if (confirmSubmitBtn) {
        confirmSubmitBtn.addEventListener('click', function() {
            submitPractice();
            submitModal.style.display = 'none';
        });
    }

    if (submitModal) {
        submitModal.addEventListener('click', function(event) {
            if (event.target === submitModal) {
                submitModal.style.display = 'none';
            }
        });
    }

    const answerModal = document.getElementById('answerModal');
    const closeAnswerBtn = document.getElementById('closeAnswerBtn');

    if (closeAnswerBtn) {
        closeAnswerBtn.addEventListener('click', function() {
            answerModal.style.display = 'none';
        });
    }

    if (answerModal) {
        answerModal.addEventListener('click', function(event) {
            if (event.target === answerModal) {
                answerModal.style.display = 'none';
            }
        });
    }
}

function showSubmitModal() {
    const modal = document.getElementById('submitModal');
    if (!modal) return;

    const questions = getCurrentQuestions();
    let answeredCount = 0;

    questions.forEach(question => {
        const answer = practiceState.answers[question.id];
        if (typeof answer === 'string' && answer.trim() !== '') {
            answeredCount += 1;
        } else if (Array.isArray(answer) && answer.length > 0) {
            answeredCount += 1;
        }
    });

    const unansweredCount = questions.length - answeredCount;

    const answeredElement = document.getElementById('modalAnswered');
    const totalElement = document.getElementById('modalTotal');
    const unansweredElement = document.getElementById('modalUnanswered');

    if (answeredElement) answeredElement.textContent = answeredCount;
    if (totalElement) totalElement.textContent = questions.length;
    if (unansweredElement) unansweredElement.textContent = unansweredCount;

    modal.style.display = 'flex';
}

function submitPractice() {
    if (practiceState.isSubmitted) {
        return;
    }

    practiceState.isSubmitted = true;
    clearStoredState(practiceState.currentSubject, practiceState.currentTestSet);

    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    const questions = getCurrentQuestions();
    let correctCount = 0;
    let totalScore = 0;

    questions.forEach(question => {
        const userAnswer = practiceState.answers[question.id];
        const correctAnswer = question.correctAnswer;
        let isCorrect = false;

        if (question.type === 'single') {
            isCorrect = userAnswer === correctAnswer;
        } else if (question.type === 'multiple') {
            if (Array.isArray(userAnswer) && Array.isArray(correctAnswer)) {
                const userSorted = [...userAnswer].sort().join('');
                const correctSorted = [...correctAnswer].sort().join('');
                isCorrect = userSorted === correctSorted;
            }
        }

        if (isCorrect) {
            correctCount += 1;
            totalScore += 10;
        }
    });

    disablePractice();
    updateNavButtons();
    updateQuestionGrid();

    const totalQuestions = questions.length;
    const message = [
        '提交成功！',
        `科目：${getCurrentSubjectConfig().name}`,
        `套题：${getCurrentTestSetConfig().name}`,
        `总题数：${totalQuestions}`,
        `答对题数：${correctCount}`,
        `答错题数：${totalQuestions - correctCount}`,
        `得分：${totalScore} / ${totalQuestions * 10}`,
        `正确率：${totalQuestions === 0 ? '0' : ((correctCount / totalQuestions) * 100).toFixed(1)}%`
    ].join('\n');

    alert(message);
}

function disablePractice() {
    const optionInputs = document.querySelectorAll('.question-area input');
    optionInputs.forEach(input => {
        input.disabled = true;
    });

    const questionButtons = document.querySelectorAll('.question-btn');
    questionButtons.forEach(button => {
        button.disabled = true;
    });

    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) submitBtn.disabled = true;

    const markBtn = document.getElementById('markBtn');
    if (markBtn) markBtn.disabled = true;

    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) clearBtn.disabled = true;

    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) prevBtn.disabled = true;

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.disabled = true;
}

function showAnswerModal() {
    const modal = document.getElementById('answerModal');
    const answerContent = document.getElementById('answerContent');
    if (!modal || !answerContent) return;

    const questions = getCurrentQuestions();
    let html = '';

    questions.forEach((question, index) => {
        const userAnswer = practiceState.answers[question.id];
        const correctAnswer = question.correctAnswer;

        let userAnswerText = '未作答';
        if (question.type === 'single' && typeof userAnswer === 'string') {
            userAnswerText = userAnswer;
        } else if (question.type === 'multiple' && Array.isArray(userAnswer) && userAnswer.length > 0) {
            userAnswerText = userAnswer.join(', ');
        }

        let correctAnswerText = '';
        if (question.type === 'single') {
            correctAnswerText = correctAnswer;
        } else if (question.type === 'multiple') {
            correctAnswerText = correctAnswer.join(', ');
        }

        let isCorrect = false;
        if (question.type === 'single') {
            isCorrect = userAnswer === correctAnswer;
        } else if (question.type === 'multiple') {
            if (Array.isArray(userAnswer) && Array.isArray(correctAnswer)) {
                const userSorted = [...userAnswer].sort().join('');
                const correctSorted = [...correctAnswer].sort().join('');
                isCorrect = userSorted === correctSorted;
            }
        }

        html += `
            <div class="answer-item">
                <div class="answer-question">${index + 1}. ${question.title}</div>
                <div class="answer-correct">正确答案：${correctAnswerText}</div>
                <div class="answer-user ${isCorrect ? 'correct' : 'incorrect'}">您的答案：${userAnswerText}</div>
                ${question.explanation ? `<div style="margin-top: 0.5rem; color: #666; font-size: 0.9rem;">${question.explanation}</div>` : ''}
            </div>
        `;
    });

    answerContent.innerHTML = html;
    modal.style.display = 'flex';
}

// ========== 进度统计 ==========
function updateProgress() {
    const questions = getCurrentQuestions();
    let answeredCount = 0;

    questions.forEach(question => {
        const answer = practiceState.answers[question.id];
        if (typeof answer === 'string' && answer.trim() !== '') {
            answeredCount += 1;
        } else if (Array.isArray(answer) && answer.length > 0) {
            answeredCount += 1;
        }
    });

    const unansweredCount = questions.length - answeredCount;
    const markedCount = practiceState.markedQuestions.size;

    const answeredElement = document.getElementById('answeredCount');
    const unansweredElement = document.getElementById('unansweredCount');
    const markedElement = document.getElementById('markedCount');
    const progressFill = document.getElementById('progressFill');

    if (answeredElement) answeredElement.textContent = answeredCount;
    if (unansweredElement) unansweredElement.textContent = unansweredCount;
    if (markedElement) markedElement.textContent = markedCount;

    if (progressFill) {
        const progressPercent = questions.length === 0 ? 0 : (answeredCount / questions.length) * 100;
        progressFill.style.width = `${progressPercent}%`;
    }
}

// ========== 标题与模式显示 ==========
function updateSubjectTitle() {
    const subjectConfig = getCurrentSubjectConfig();
    const testSetConfig = getCurrentTestSetConfig();

    const titleElement = document.getElementById('practiceSubject');
    if (titleElement && subjectConfig) {
        titleElement.textContent = `${subjectConfig.name}模拟练习`;
    }

    const modeElement = document.getElementById('practiceMode');
    if (modeElement && testSetConfig) {
        modeElement.textContent = `模拟考试模式 | 当前套题：${testSetConfig.name}`;
    }
}

// ========== 本地存储 ==========
function getStorageKey(key, subjectKey = practiceState.currentSubject, testSetKey = practiceState.currentTestSet) {
    return `practice_${key}_${subjectKey}_${testSetKey}`;
}

function saveCurrentState() {
    if (practiceState.isSubmitted) {
        clearStoredState(practiceState.currentSubject, practiceState.currentTestSet);
        return;
    }
    localStorage.setItem(getStorageKey('time'), String(practiceState.timeRemaining));
    localStorage.setItem(getStorageKey('answers'), JSON.stringify(practiceState.answers));
    localStorage.setItem(getStorageKey('marked'), JSON.stringify([...practiceState.markedQuestions]));
}

function loadStoredState() {
    const storedTime = localStorage.getItem(getStorageKey('time'));
    if (storedTime) {
        const parsed = parseInt(storedTime, 10);
        if (!Number.isNaN(parsed) && parsed > 0) {
            practiceState.timeRemaining = parsed;
        }
    }

    const storedAnswers = localStorage.getItem(getStorageKey('answers'));
    if (storedAnswers) {
        try {
            const parsedAnswers = JSON.parse(storedAnswers);
            if (parsedAnswers && typeof parsedAnswers === 'object') {
                practiceState.answers = parsedAnswers;
            }
        } catch (error) {
            console.error('恢复答案失败:', error);
            practiceState.answers = {};
        }
    }

    const storedMarked = localStorage.getItem(getStorageKey('marked'));
    if (storedMarked) {
        try {
            const parsedMarked = JSON.parse(storedMarked);
            if (Array.isArray(parsedMarked)) {
                practiceState.markedQuestions = new Set(parsedMarked);
            }
        } catch (error) {
            console.error('恢复标记题目失败:', error);
            practiceState.markedQuestions = new Set();
        }
    }
}

function clearStoredState(subjectKey, testSetKey) {
    localStorage.removeItem(getStorageKey('time', subjectKey, testSetKey));
    localStorage.removeItem(getStorageKey('answers', subjectKey, testSetKey));
    localStorage.removeItem(getStorageKey('marked', subjectKey, testSetKey));
}

window.addEventListener('beforeunload', function() {
    saveCurrentState();
});

// 可选：页面隐藏时保存一次状态
window.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        saveCurrentState();
    }
});
