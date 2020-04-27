import Vue from 'vue';
import Vuex from 'vuex';
import { DETAIL_VIEW_ITEM_MUTATION } from '../constants/mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		categoryItemDataModel: {
			id: {
				label: 'ID',
				type: 'number',
				fieldType: 'input',
				description: 'Уникальный идентификатор записи'
			},
			name: {
				label: 'Имя',
				type: 'string',
				fieldType: 'input',
				description: 'Название записи'
			},
			originalName: {
				label: 'Оригинальное название',
				type: 'string',
				fieldType: 'input',
				description: 'Оригинальное название записи'
			},
			description: {
				label: 'Описание',
				type: 'string',
				fieldType: 'textarea',
				description: 'Описание записи'
			},
			isCategory: {
				label: 'Категория',
				type: 'boolean',
				fieldType: 'checkbox',
				description: 'Является ли записать категорией?'
			},
			children: {
				label: 'Подкатегории и Записи',
				type: 'array',
				fieldType: 'select',
				description: 'Список подкатегорий'
			}
		},
		selectedItem: {},
		categories: [
			{
				id: 1,
				name: 'Космер',
				originalName: 'Cosmere',
				description: `Космер — это особая вселенная, полностью отделённая от нашего мира, в которой происходит действие нескольких фэнтези произведений Брендона Сандерсона.
Так как космер подразумевает одновременное существование десяти миров (планет), то книги по космеру связаны между собой общей историей. Кроме десяти основных миров существует неизвестное количество других обитаемых миров в космере. Несмотря на то, что у космера та же структура, что и у нашей вселенной, с галактиками, солнечными системами и прочим, все миры космера расположены в той же компактной карликовой галактике, поэтому в ней гораздо меньше звёзд и солнечных систем, чем в нашей. Время во всех мирах космера течёт одинаково. Течение времени управляется силой извне.
Нет необходимости что-либо знать о космере, чтобы наслаждаться книгами или сериями книг по отдельности, так как история происходит на его фоне.`,
				isCategory: true,
				children: [
					{
						id: 2,
						name: 'Ашин',
						originalName: 'Ashyn',
						isCategory: true,
						description: ''
					},
					{
						id: 3,
						name: 'Рошар',
						originalName: 'Roshar',
						description: 'Descr',
						isCategory: true,
						children: [
							{
								id: 4,
								name: 'Архив Буресвета',
								originalName: 'The Stormlight Archive',
								description: `В далёком прошлом, как рассказывают церковные историки, от Несущих Пустоту людей защищал орден Сияющих Рыцарей, но в монстров никто уже не верит, а Сияющие предали людей и ушли. Артефакты той эпохи сейчас ценятся, как небольшое королевство, а их владельцы, которые в бою стоят армии, сражаются друг с другом за власть.
Все люди — и простые темноглазые работяги, и благородные светлоглазые лорды — привыкли к свирепым сверхштормам, что несут массу воды и земли, но также они заряжают светом драгоценные сферы, основу местной экономики. Но вскоре надвигается Вечный Шторм. Он принесёт с собой чудовищ из сказок и смерть всему живому. И только объединение и возвращение Сияющих даёт людям надежду спастись.
Смогут ли люди выстоять перед напастью, которой даже их создатель, Всемогущий бог, проиграл?`,
								isCategory: true,
								children: [
									{
										id: 5,
										name: 'Путь королей',
										originalName: 'The Way of Kings',
										image:
											'https://data.fantlab.ru/images/editions/orig/138728?r=1492535709',
										description: `Рошар − мир штормов и скал. Сверхшторма невероятной силы проносятся над каменистым ландшафтом. Спасаясь от них, странные животные скрываются в раковинах, причудливые растения прячутся в земле.
Прошли столетия после падения Сияющих Рыцарей, но от них остались Доспехи и Клинки Осколков, обладание которыми преображает обычных людей в непобедимых воинов.
На Разрушенных Равнинах идет война с загадочным народом паршенди, которые несколько лет назад организовали убийство короля Алеткара. Бывший воин Каладин, в силу обстоятельств ставший рабом, попадает в бригаду мостовиков, смертников, которые под градом стрел паршенди таскают мосты для переправки армии через расщелины.
Кронпринц Далинар Холин, командующий одной из армий алети, брат покойного короля и дядя ныне правящего, обеспокоен являющимися ему во время сверхштормов пророческими видениями.
Юная Шаллан стремится к встрече с сестрой короля Джаснах, которая известна как выдающийся ученый, но и как еретичка. Хотя Шаллан искренне желает стать ученицей Джаснах, не все ее намерения по отношению к будущей учительнице честны и благородны.`,
										isCategory: false
									},
									{
										id: 6,
										name: 'Слова сияния',
										originalName: 'Words of Radiance',
										image:
											'https://data.fantlab.ru/images/editions/orig/138729?r=1496679119',
										isCategory: false,
										description: `Шесть лет кронпринцы Алеткара исполняли пакт мщения за убийство своего короля. Четыре с половиной тысячелетия паршенди не принимали форму силы, а спрены не связывали свои судьбы с людьми. Но всему приходит конец. И всё, что нужно героям сделать перед его лицом — так это выполнить одну предсмертную просьбу и найти «самые важные из слов» — «Слова Сияния». Ну и выжить конечно.`
									},
									{
										id: 7,
										name: 'Гранетанцор',
										originalName: 'Edge Dancer',
										image:
											'https://data.fantlab.ru/images/editions/orig/212142?r=1509089544',
										isCategory: false,
										description: `Неугомонной Лифт наскучила сытая жизнь в Азире, и она сбегает из дворца. Погоня за Мраком, который когда-то чуть ее не убил, приводит Лифт в Ташикк, в город Йеддо, выстроенный в каменных расселинах. Мрак и его подручные разыскивают здесь человека с необычными способностями. Но почему Лифт преследует Мрака? Только ли потому, что хочет съесть его завтрак?`
									},
									{
										id: 8,
										name: 'Давший клятву',
										originalName: 'Oathbringer',
										image:
											'https://data.fantlab.ru/images/editions/big/195648?r=1492543804',
										isCategory: false,
										description: `Oathbringer — третий том из цикла «Архив буресвета» обещает много интересного. В Рошар возвращаются Приносящие Пустоту – враги смертельно опасные и одержимые жаждой мести.
Армия алети, возглавляемая Далинаром Холином, одерживает победу, но цена её оказывается слишком высока. Паршенди призывают Бурю бурь, которая не только грозит разрушить мир, но и пробуждает среди послушных и ранее покорных паршунов желание взбунтоваться и освободить себя от многовекового рабства. В попытках предупредить семью о надвигающейся угрозе Каладину Благословенному Бурей приходится смириться с фактом, что гнев паршменов имеет под собой весомые причины.
Находясь высоко в горах, Шаллан Давар исследует чудеса Уритиру — древнего города-крепости Сияющих рыцарей — и обнаруживает темные тайны, скрывающиеся в его глубинах. Далинар осознаёт, что объединить разрозненные земли Алеткара будет не так-то просто: даже если народы Рошара сумеют преодолеть многолетнюю вражду, а сам Далинар — отринуть кровавое прошлое, одно лишь возрождение Сияющих рыцарей ещё не гарантирует победы.`
									}
								]
							}
						]
					},
					{
						id: 9,
						name: 'Налтис',
						originalName: 'Naltis',
						isCategory: true,
						description: '',
						children: [
							{
								id: 10,
								name: 'Убийца Войн',
								originalName: 'Warbreaker',
								isCategory: false,
								description: `Ворвавшись на сцену фэнтези с восторженно принятым публикой дебютным романом «Город богов», и закрепив успех успешной трилогией «Рожденный туманом», Брендон Сандерсон вновь доказывает, что он один из признанных мастеров в том, что Толкин называл «вторичным творением» — создании целых миров, с собственными досконально проработанными мифами и магией.
Warbreaker – история о двух сестрах, которым довелось родиться принцессами, о Боге-короле, которому предстоит жениться на одной из них, о малом божестве, которому не нравится его работа, и о бессмертном, пытающемся исправить ошибки, сделанные им сотни лет назад.
В их мире умершие славной смертью возвращаются, чтобы стать богами в пантеоне стольного города Халландрена; в нём действуют силы, известные как биохроматическая магия и происходящие из сущности, называемой «жизненной силой», которую можно получить по одной единице от человека за раз.
С использованием «жизненной силы» и с привязкой к цветам окружающих объектов становятся возможными любые чудеса и злодеяния. И те и другие во множестве встретятся на пути Вивенны и Сири, принцесс Идриса, Сузборна Бога-короля, Гимна рассвета – утомлённого бога отваги и таинственного Вашера.`
							}
						]
					}
				]
			}
		]
	},
	mutations: {
		[DETAIL_VIEW_ITEM_MUTATION](state, item) {
			state.selectedItem = item;
		}
	},
	actions: {},
	modules: {}
});
