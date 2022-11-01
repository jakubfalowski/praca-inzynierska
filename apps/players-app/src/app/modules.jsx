import { Card, Image, Text, Badge, Button, Grid, Group } from '@mantine/core';
import {useNavigate} from "react-router-dom";

import image1 from "../../../../images/ratingsGames.jpg";
import image2 from "../../../../images/bestTeams.jpg";

export function Modules() {
    const navigate = useNavigate();
  return (
    <Grid>
        <Grid.Col md={4} sm={6} xs={12}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                    src={image1}
                    height={160}
                    alt="ocena w grach"
                    />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>Porównanie oceniania w grach</Text>
                    <Badge color="pink" variant="light">
                        Drużyny
                    </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                    Ocenianie w grze Fifa odbywa się w zakresie 1-99, nastomiast Football Manager od 1-20. Nazwy atrybutów w obydwu źródłach są bardzo ponowne,
                    ponieważ dotyczą tego samego przykładowo strzały, obrona, fizyczność. Jedyną różnicą jest to, że w grze Fifa piłkarzami steruje gracz,
                    a w Football Managerze sztuczna inteligencja na podstawie taktyki wybranej przez trenera (użytkownika). Stąd dodatkowe atrybuty w kolumnie mentalność.
                    Dodatkowo technika, która jest składową podań i dryblingu w grze Fifa została podzielona na dwie części, natomiast dane z symulatora trenera
                    piłkarskiego zostały ujęte w jednej kolumnie. Które ocenianie było bardziej łaskawe dla piłkarzy z ligi angielskiej? Dokładne przedstawienie
                    na podanym wykresie.
                </Text>

                <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => navigate('/players/charts')}>
                    Przejdź do podstrony
                </Button>
            </Card>
        </Grid.Col>

        <Grid.Col md={4} sm={6} xs={12}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                <Image
                    src={image2}
                    height={160}
                    alt="najlepsze drużyny"
                />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Najlepsze drużyny według atrybutu</Text>
                <Badge color="pink" variant="light">
                    Drużyny
                </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
                </Text>

                <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => navigate('/players/charts/club')}>
                    Przejdź do podstrony
                </Button>
            </Card>
        </Grid.Col>
    
        <Grid.Col md={4} sm={6} xs={12}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Norway Fjord Adventures</Text>
                <Badge color="pink" variant="light">
                    On Sale
                </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
                </Text>

                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
                </Button>
            </Card>
        </Grid.Col>
  </Grid>
  );
}

export default Modules;