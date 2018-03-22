import { SheetService } from './sheet.service';
import { SlackService } from './slack.service';

declare var global: any;

global.createNewFile = (): void => {
  const ss = SheetService.createInitialFile('New file');
  ss.getRange('A2').setValue('Happy gas!!!');

  const slackService = new SlackService();
  slackService.postSheetCreatedMessage(ss.getUrl());
};
