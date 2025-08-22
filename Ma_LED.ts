/**
 * Blocs personnalisés pour contrôler une LED
 */
//% color=#ff6600 icon="\uf0eb" weight=90
namespace MaLED {

    /**
     * Allumer la LED sur une broche donnée
     * @param pin la broche où est branchée la LED
     */
    //% blockId=allumer_led
    //% block="allumer LED sur la broche %pin"
    export function allumer(pin: DigitalPin): void {
        // On envoie du courant (valeur 1) sur la broche choisie
        pins.digitalWritePin(pin, 1)
    }

    /**
     * Éteindre la LED sur une broche donnée
     * @param pin la broche où est branchée la LED
     */
    //% blockId=eteindre_led
    //% block="éteindre LED sur la broche %pin"
    export function eteindre(pin: DigitalPin): void {
        // On coupe le courant (valeur 0) sur la broche choisie
        pins.digitalWritePin(pin, 0)
    }
}
