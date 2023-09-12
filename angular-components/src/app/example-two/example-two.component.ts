import { Component } from '@angular/core';

export interface Game {
  title: string;
  price: number;
  img: string;
}
@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css'],
})
export class ExampleTwoComponent {
  shouldTitleBePurple: boolean = false;
  shouldShowGameItemComponent: boolean = false;
  inputValue = '';

  games: Game[] = [
    {
      title: 'World of Warcraft',
      img: 'https://www.dexerto.com/cdn-cgi/image/width=750,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/01/31/world-of-warcraft-wow-cross-faction-instances-raid-dungeons-1.jpeg',
      price: 50,
    },
    {
      title: 'The Witcher 3: Wild Hunt',
      img: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
      price: 150,
    },
    {
      title: "Baldur's Gate 3",
      img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
      price: 250,
    },
  ];

  handleSearchChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    console.log(this.inputValue);
  }
  handleExpandContentClick(gamesContainer: HTMLElement): void {
    this.shouldTitleBePurple = !this.shouldTitleBePurple;
    console.log(gamesContainer.children);
  }

  handleGameItemClick() {
    this.shouldShowGameItemComponent = !this.shouldShowGameItemComponent;
  }
}
