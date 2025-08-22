/**
 * Blocs personnalisés pour contrôler une LED
 */
//% color=#ff6600 icon="\uf0eb" weight=70 block="LED"
//% groups='["Actions", "Animations"]'
namespace LED {

    /**
     * Allumer la LED sur une broche donnée
     */
    //% blockId=allumer_led
    //% block="allumer LED sur la broche %pin"
    //% group="Actions" weight=90
    export function allumer(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 1)
    }

    /**
     * Éteindre la LED sur une broche donnée
     */
    //% blockId=eteindre_led
    //% block="éteindre LED sur la broche %pin"
    //% group="Actions" weight=80
    export function eteindre(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }

    /**
     * Faire clignoter la LED
     */
    //% blockId=clignoter_led
    //% block="clignoter LED sur la broche %pin | durée %duree ms | répéter %fois fois"
    //% duree.min=10 duree.max=2000 duree.defl=200
    //% fois.min=1 fois.max=100 fois.defl=5
    //% group="Animations" weight=70
    export function clignoter(pin: DigitalPin, duree: number, fois: number): void {
        let d = Math.max(10, Math.min(2000, Math.round(duree)))
        let n = Math.max(1, Math.min(100, Math.round(fois)))
        for (let i = 0; i < n; i++) {
            pins.digitalWritePin(pin, 1)
            basic.pause(d)
            pins.digitalWritePin(pin, 0)
            basic.pause(d)
        }
    }

    /**
     * Basculer l'état de la LED (si ON → OFF, si OFF → ON)
     */
    //% blockId=basculer_led
    //% block="basculer LED sur la broche %pin"
    //% group="Actions" weight=85
    export function basculer(pin: DigitalPin): void {
        // Lire l'état actuel (0 ou 1)
        let etat = pins.digitalReadPin(pin)
        // Inverser : si 0 alors 1, si 1 alors 0
        let nouveauEtat = etat == 0 ? 1 : 0
        pins.digitalWritePin(pin, nouveauEtat)
    }
}
