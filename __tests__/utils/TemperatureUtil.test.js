import { TemperatureVO } from "../../valueobjects/TemperatureVO";
import TemperatureUtil from "../../utils/TemperatureUtil";

describe("TemperatureUtil unit tests", () => {
    const { convert } = TemperatureUtil();
    
    test('Given Temperature 20C, the conversion should be 68F', () => {
        // GIVEN
        let input = new TemperatureVO(20, "CELSIUS");
        let expectedOutput = new TemperatureVO(68, "FAHRENHEIT");

        // WHEN 
        let actualOutput = convert(input, "FAHRENHEIT");

        // THEN 
        expect(actualOutput).toStrictEqual(expectedOutput);       
    });

    test('Given Temperature 68F When convert Then 20C', () => {
        // GIVEN
        let input = new TemperatureVO(68, "FAHRENHEIT");
        let expectedOutput = new TemperatureVO(20, "CELSIUS");

        // WHEN
        let actualOutput = convert(input, "CELSIUS");

        // THEN 
        expect(actualOutput).toStrictEqual(expectedOutput);
    });

    test('Given Temperature 30C When convert Then 30C', () => {
        // GIVEN
        let input = new TemperatureVO(30, "CELSIUS");
        let expectedOutput = new TemperatureVO(30, "CELSIUS");

        // WHEN
        let actualOutput = convert(input, "CELSIUS");
        
        // THEN
        expect(input).toStrictEqual(expectedOutput);
    })
});