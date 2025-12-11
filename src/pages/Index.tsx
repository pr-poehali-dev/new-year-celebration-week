import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const events = [
  {
    date: "22 декабря",
    title: "День новогоднего настроения",
    icon: "Sparkles",
    activities: [
      { time: "15:00", title: "Смотр оформления кабинетов", location: "Офис", description: "Оценка праздничного оформления всех кабинетов", fileUrl: "https://cdn.poehali.dev/files/Оценочный лист.jpg", fileName: "Критерии оценки" },
      { time: "12:30", title: "Мастер-класс по созданию новогодних украшений", location: "Банкетный зал", description: "Создание оригинальных украшений из бересты своими руками. Результаты украсят офис!" }
    ]
  },
  {
    date: "23 декабря",
    title: "День сказочных воспоминаний",
    icon: "PartyPopper",
    activities: [
      { time: "12:30", title: "Веселые старты", location: "Спортзал", description: "Соревнования: запуск бумажных снеговиков, эстафета с мандарином на ложке, метание бумажных снежков в корзину" },
      { time: "19:00", title: "Корпоратив", location: "ресторан Мюнхен", description: "Праздничный вечер в ресторане" }
    ]
  },
  {
    date: "24 декабря",
    title: "День ароматных мандаринок",
    icon: "Flame",
    activities: [
      { time: "12:00", title: "Деловая игра", location: "аудитория 1.5", description: "Эксперт по психологии и личной эффективности расскажет о достижении целей, техниках управления временем и стрессоустойчивости" },
      { time: "14:00", title: "Детский новый год", location: "ул. Патриотов 9", description: "Новогодний праздник для детей сотрудников" }
    ]
  },
  {
    date: "25 декабря",
    title: "День волшебства и сюрпризов",
    icon: "Wand2",
    activities: [
      { time: "12:00", title: "Новогодний квест", location: "Холл 2 этажа", description: "Увлекательное командное приключение с загадками и сюрпризами" }
    ]
  },
  {
    date: "26 декабря",
    title: "День ожидания чуда",
    icon: "Gift",
    activities: [
      { time: "09:00", title: "Раздача подарков", location: "Вход", description: "" },
      { time: "14:00", title: "Официальное поздравление", location: "Актовый зал", description: "Поздравление коллектива, Тайный Дед Мороз", fileUrl: "https://cdn.poehali.dev/files/тайный Дед Мороз.jpg", fileName: "Тайный Дед Мороз - правила" },
      { time: "15:00-17:00", title: "Новогодний огонек", location: "Столовая", description: "Фуршет в костюмах, ребусы, загадки, поздравления от отделов. Для членов профсоюза мероприятие проводится бесплатно, остальным сотрудникам предоставляется возможность посетить за символическую плату в размере 500 рублей.", fileUrl: "https://cdn.poehali.dev/files/Поздравления.jpg", fileName: "Список структурных подразделений" }
    ]
  },
  {
    date: "30 декабря",
    title: "День обновления и свежести",
    icon: "Sparkles",
    activities: [
      { time: "до 12:00", title: "Совместная уборка кабинета", location: "Рабочее место", description: "Выбросьте хлам, освободите место для нового. Можно мысленно «выбросить» и что-то негативное, написав это на бумаге и выкинув." }
    ]
  },
  {
    date: "29 декабря",
    title: "День снежинок и улыбок",
    icon: "Snowflake",
    activities: [
      { time: "Скоро", title: "Программа уточняется", location: "Офис", description: "Следите за обновлениями!" }
    ]
  },
  {
    date: "30 декабря",
    title: "День прощания со старым годом",
    icon: "Calendar",
    activities: [
      { time: "Скоро", title: "Программа уточняется", location: "Офис", description: "Следите за обновлениями!" }
    ]
  }
];

const Snowflake = ({ delay }: { delay: number }) => (
  <div
    className="absolute text-white text-2xl opacity-70 animate-snowfall pointer-events-none"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${8 + Math.random() * 4}s`
    }}
  >
    ❄
  </div>
);

export default function Index() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("calendar");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Подписка оформлена! 🎉",
        description: `Напоминания будут отправлены на ${email}`,
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent via-accent/90 to-accent/80 relative overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <Snowflake key={i} delay={i * 0.5} />
      ))}

      <div className="relative z-10">
        <header className="py-8 px-4 text-center bg-primary/10 backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 animate-fade-in">
            ❄️ Предновогодняя неделя
          </h1>
          <p className="text-white/90 text-lg md:text-xl">22-30 декабря 2025</p>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto mb-8 bg-white/90 backdrop-blur">
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <Icon name="Calendar" size={18} />
                <span className="hidden sm:inline">Календарь</span>
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Icon name="List" size={18} />
                <span className="hidden sm:inline">События</span>
              </TabsTrigger>
              <TabsTrigger value="subscribe" className="flex items-center gap-2">
                <Icon name="Bell" size={18} />
                <span className="hidden sm:inline">Подписка</span>
              </TabsTrigger>
              <TabsTrigger value="photos" className="flex items-center gap-2">
                <Icon name="Camera" size={18} />
                <span className="hidden sm:inline">Фото</span>
              </TabsTrigger>
              <TabsTrigger value="contacts" className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                <span className="hidden sm:inline">Контакты</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="calendar" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event, idx) => (
                  <Card 
                    key={idx} 
                    className="hover-scale cursor-pointer bg-white/95 backdrop-blur border-2 border-white shadow-xl hover:shadow-2xl transition-all"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-sm bg-secondary text-white">
                          {event.date}
                        </Badge>
                        <Icon name={event.icon as any} size={32} className="text-primary" />
                      </div>
                      <CardTitle className="text-xl text-accent">{event.title}</CardTitle>
                      <CardDescription className="text-base">
                        {event.activities.length} {event.activities.length === 1 ? 'событие' : 'события'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {event.activities.slice(0, 2).map((activity, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <Icon name="Clock" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {activity.time} - {activity.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Icon name="ListTree" size={24} />
                    Подробное расписание событий
                  </CardTitle>
                  <CardDescription>Нажмите на день, чтобы увидеть детали</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {events.map((event, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger className="text-left hover:no-underline">
                          <div className="flex items-center gap-3">
                            <Icon name={event.icon as any} size={24} className="text-primary" />
                            <div>
                              <div className="font-semibold text-accent">{event.date}</div>
                              <div className="text-sm text-muted-foreground">{event.title}</div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-4">
                            {event.activities.map((activity, i) => (
                              <div key={i} className="border-l-4 border-primary pl-4 py-2">
                                <div className="flex items-center gap-2 mb-2">
                                  <Icon name="Clock" size={16} className="text-primary" />
                                  <span className="font-semibold text-accent">{activity.time}</span>
                                </div>
                                <h4 className="font-semibold text-lg mb-1">{activity.title}</h4>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                  <Icon name="MapPin" size={14} />
                                  {activity.location}
                                </div>
                                <p className="text-sm text-muted-foreground">{activity.description}</p>
                                {activity.fileUrl && (
                                  <a
                                    href={activity.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-3 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                                  >
                                    <Icon name="FileText" size={16} />
                                    {activity.fileName || 'Открыть файл'}
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscribe" className="space-y-6">
              <Card className="bg-white/95 backdrop-blur max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Icon name="Bell" size={24} />
                    Подписка на напоминания
                  </CardTitle>
                  <CardDescription>
                    Получайте уведомления о предстоящих событиях на почту
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email для уведомлений
                      </label>
                      <div className="flex gap-2">
                        <Input
                          id="email"
                          type="email"
                          placeholder="example@company.ru"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="flex-1"
                        />
                        <Button type="submit" className="bg-primary hover:bg-primary/90">
                          <Icon name="Send" size={18} className="mr-2" />
                          Подписаться
                        </Button>
                      </div>
                    </div>
                  </form>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Info" size={18} className="text-primary" />
                      О напоминаниях
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Уведомление за день до события</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Напоминание утром в день мероприятия</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Информация о месте проведения и времени</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="photos" className="space-y-6">
              <Card className="bg-white/95 backdrop-blur max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Icon name="Camera" size={24} />
                    Фото с мероприятий
                  </CardTitle>
                  <CardDescription>
                    Яркие моменты предновогодней недели
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Icon name="Image" size={64} className="text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground text-lg mb-2">Фотографии появятся после проведения мероприятий</p>
                    <p className="text-sm text-muted-foreground">Следите за обновлениями!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contacts" className="space-y-6">
              <Card className="bg-white/95 backdrop-blur max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Icon name="Phone" size={24} />
                    Контакты и информация
                  </CardTitle>
                  <CardDescription>
                    По всем вопросам обращайтесь к организаторам
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-semibold">Телефон</div>
                        <div className="text-muted-foreground">+7 (908) 955-13-64</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-semibold">Основная площадка</div>
                        <div className="text-muted-foreground">ауд.2.8</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Users" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-semibold">Организационный комитет</div>
                        <div className="text-muted-foreground">ПРОФКОМ</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-3">Важная информация</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Info" size={16} className="text-primary mt-0.5" />
                        <span>Для участия в мастер-классах требуется предварительная регистрация</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Info" size={16} className="text-primary mt-0.5" />
                        <span>На корпоратив 26 декабря приветствуются праздничные костюмы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Info" size={16} className="text-primary mt-0.5" />
                        <span>Детский праздник 24 декабря по адресу ул. Патриотов 9</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <footer className="py-6 text-center text-white/80 bg-accent/20 backdrop-blur-sm mt-12">
          <p className="text-sm">С наступающим Новым годом! 🎄✨</p>
        </footer>
      </div>

      <Dialog open={selectedEvent !== null} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              <Icon name={selectedEvent?.icon as any} size={32} className="text-primary" />
              {selectedEvent?.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {selectedEvent?.date}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {selectedEvent?.activities.map((activity, i) => (
              <div key={i} className="border-l-4 border-primary pl-4 py-3 bg-muted/30 rounded-r">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Clock" size={18} className="text-primary" />
                  <span className="font-semibold text-lg">{activity.time}</span>
                </div>
                <h4 className="font-bold text-xl mb-2">{activity.title}</h4>
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Icon name="MapPin" size={16} />
                  <span>{activity.location}</span>
                </div>
                <p className="text-muted-foreground">{activity.description}</p>
                {activity.fileUrl && (
                  <a
                    href={activity.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    <Icon name="FileText" size={18} />
                    {activity.fileName || 'Открыть файл'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}