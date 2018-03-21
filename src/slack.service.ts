import { PropertyService } from './property.service';

declare var SlackApp: SlackApp;
const CHANNEL_ID = 'gas-web-scraping';

export class SlackService {
  slackApp: SlackAppAPI;

  constructor() {
    const token = PropertyService.getToken();
    this.slackApp = SlackApp.create(token);
  }

  postSheetCreatedMessage(url: string): void {
    this.slackApp.postMessage(CHANNEL_ID, url);
  }
}

interface SlackApp {
  create(token: string): SlackAppAPI;
}

interface SlackAppAPI {
  postMessage(channelId: string, url: string): void;
}
