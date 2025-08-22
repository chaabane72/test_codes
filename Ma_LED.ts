/**
 * Blocs personnalisés pour contrôler une LED
 */
//% color=#ff6600 icon="\uf0eb" weight=70 block="LED"
//% groups='["Actions", "Animations"]'
namespace LED {

    /**
     * Allumer la LED sur une broche donnée
     * @param pin la broche où est branchée la LED
     */
    //% blockId=allumer_led
    //% block="allumer LED sur la broche %pin"
    //% group="Actions" weight=90
    export function allumer(pin: DigitalPin): void {
        // Met la broche à 1 (3,3 V) → la LED s'allume
        pins.digitalWritePin(pin, 1)
    }

    /**
     * Éteindre la LED sur une broche donnée
     * @param pin la broche où est branchée la LED
     */
    //% blockId=eteindre_led
    //% block="éteindre LED sur la broche %pin"
    //% group="Actions" weight=80
    export function eteindre(pin: DigitalPin): void {
        // Met la broche à 0 (0 V) → la LED s'éteint
        pins.digitalWritePin(pin, 0)
    }

    /**
     * Faire clignoter la LED : on/off avec pauses
     * @param pin la broche où est branchée la LED
     * @param duree durée ON puis OFF, en millisecondes
     * @param fois nombre de clignotements
     */
    //% blockId=clignoter_led
    //% block="clignoter LED sur la broche %pin | durée %duree ms | répéter %fois fois"
    //% duree.min=10 duree.max=2000 duree.defl=200
    //% fois.min=1 fois.max=100 fois.defl=5
    //% group="Animations" weight=70
    export function clignoter(pin: DigitalPin, duree: number, fois: number): void {
        // Assainir les paramètres (bornes raisonnables)
        let d = Math.max(10, Math.min(2000, Math.round(duree)))
        let n = Math.max(1, Math.min(100, Math.round(fois)))

        for (let i = 0; i < n; i++) {
            // ALLUMER puis attendre
            pins.digitalWritePin(pin, 1)
            basic.pause(d)
            // ÉTEINDRE puis attendre
            pins.digitalWritePin(pin, 0)
            basic.pause(d)
        }
    }
}
