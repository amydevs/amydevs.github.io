import Link from "next/link";
import projectCards from "~/cfg/projectCards";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

function Portfolio() {
    return <main className="auto-limit-w grid grid-cols-1 md:grid-cols-2 gap-3 py-3 max-w-6xl">
        {
            projectCards.map((card, i) =>
                <Card key={i} className="h-72 flex flex-col hover:shadow-xl transition-all">
                    <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto">
                        {card.description}
                    </CardContent>
                    <CardFooter className="flex justify-end gap-3">
                        {
                            card.actions.map((action, i) =>
                                <Button key={i} asChild>
                                    <Link href={action.href}>
                                        <action.icon className="mr-1" />
                                        {action.text}
                                    </Link>
                                </Button>
                            )
                        }
                    </CardFooter>
                </Card>
            )
        }
    </main>;
}

export default Portfolio;