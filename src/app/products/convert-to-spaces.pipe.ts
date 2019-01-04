import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "converToSpaces"
})
export class ConverToSpacesPipe implements PipeTransform {

    transform(value: string, character: string) {
        return value.replace(character, ' ');
    }
}