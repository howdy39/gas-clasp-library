interface ScriptProperty {
  token: string;
}

const property: ScriptProperty = <ScriptProperty>PropertiesService.getScriptProperties().getProperties();

export class PropertyService {
  static getToken(): string {
    return property.token;
  }
}
