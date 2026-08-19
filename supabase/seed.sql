-- language-stories: 5 historias A1-A2 para el MVP.
-- Ejecutar tras la migración 0001_init.sql.

do $$
declare
  story_id uuid;
begin

  -- 1. A New Morning (A1)
  insert into stories (title, level) values ('A New Morning', 'A1')
    returning id into story_id;
  insert into sentences (story_id, order_index, text_en, text_es) values
    (story_id, 1, 'Every morning, Anna wakes up at seven o''clock.', 'Cada mañana, Anna se despierta a las siete.'),
    (story_id, 2, 'She drinks a cup of coffee in the kitchen.', 'Ella bebe una taza de café en la cocina.'),
    (story_id, 3, 'Then she walks her dog in the park.', 'Después pasea a su perro en el parque.'),
    (story_id, 4, 'The park is quiet and full of trees.', 'El parque está tranquilo y lleno de árboles.'),
    (story_id, 5, 'Anna smiles and feels happy to start the day.', 'Anna sonríe y se siente feliz de empezar el día.');

  -- 2. The Little Bakery (A1)
  insert into stories (title, level) values ('The Little Bakery', 'A1')
    returning id into story_id;
  insert into sentences (story_id, order_index, text_en, text_es) values
    (story_id, 1, 'There is a small bakery on Main Street.', 'Hay una pequeña panadería en la calle Main.'),
    (story_id, 2, 'Every day, the baker makes fresh bread.', 'Cada día, el panadero hace pan fresco.'),
    (story_id, 3, 'The smell of bread fills the whole street.', 'El olor del pan llena toda la calle.'),
    (story_id, 4, 'Children stop to look at the cakes in the window.', 'Los niños se detienen a mirar los pasteles en el escaparate.'),
    (story_id, 5, 'The baker always gives them a free cookie.', 'El panadero siempre les da una galleta gratis.');

  -- 3. A Trip to the Beach (A2)
  insert into stories (title, level) values ('A Trip to the Beach', 'A2')
    returning id into story_id;
  insert into sentences (story_id, order_index, text_en, text_es) values
    (story_id, 1, 'Last summer, Marco and his family went to the beach.', 'El verano pasado, Marco y su familia fueron a la playa.'),
    (story_id, 2, 'They drove for three hours to arrive there.', 'Condujeron durante tres horas para llegar.'),
    (story_id, 3, 'When they arrived, the sea was calm and blue.', 'Cuando llegaron, el mar estaba tranquilo y azul.'),
    (story_id, 4, 'Marco built a big sandcastle with his sister.', 'Marco construyó un gran castillo de arena con su hermana.'),
    (story_id, 5, 'In the evening, they ate fish at a small restaurant.', 'Por la tarde, comieron pescado en un pequeño restaurante.'),
    (story_id, 6, 'It was one of the best days of the summer.', 'Fue uno de los mejores días del verano.');

  -- 4. Learning to Cook (A2)
  insert into stories (title, level) values ('Learning to Cook', 'A2')
    returning id into story_id;
  insert into sentences (story_id, order_index, text_en, text_es) values
    (story_id, 1, 'Sofia never learned how to cook when she was young.', 'Sofia nunca aprendió a cocinar cuando era joven.'),
    (story_id, 2, 'Last year, she decided to take a cooking class.', 'El año pasado, decidió apuntarse a clases de cocina.'),
    (story_id, 3, 'At first, she made many mistakes in the kitchen.', 'Al principio, cometió muchos errores en la cocina.'),
    (story_id, 4, 'Her teacher was patient and explained everything slowly.', 'Su profesora era paciente y explicaba todo despacio.'),
    (story_id, 5, 'Now Sofia can cook pasta, soup, and even a cake.', 'Ahora Sofia sabe cocinar pasta, sopa e incluso un pastel.'),
    (story_id, 6, 'Her family loves the dinners she prepares on Sundays.', 'A su familia le encantan las cenas que prepara los domingos.');

  -- 5. The New Job (A2)
  insert into stories (title, level) values ('The New Job', 'A2')
    returning id into story_id;
  insert into sentences (story_id, order_index, text_en, text_es) values
    (story_id, 1, 'David started a new job at a small company.', 'David empezó un nuevo trabajo en una pequeña empresa.'),
    (story_id, 2, 'On his first day, he felt nervous and excited.', 'En su primer día, se sintió nervioso y emocionado.'),
    (story_id, 3, 'His coworkers were friendly and helped him a lot.', 'Sus compañeros fueron amables y le ayudaron mucho.'),
    (story_id, 4, 'After one month, David understood his job very well.', 'Después de un mes, David entendía muy bien su trabajo.'),
    (story_id, 5, 'He was proud of how much he had learned.', 'Estaba orgulloso de todo lo que había aprendido.');

end $$;
