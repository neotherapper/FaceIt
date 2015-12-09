/**
 * Products Factory
 * @namespace Factories
 */

(function () {
    'use strict';

    angular
        .module('faceIt')
        .factory('Products', Products);

    /**
     * @namespace Products
     * @desc Application wide data for Products
     * @memberOf Factories
     */
    /* @ngInject */
    function Products($q) {

        var service = {
            get: get
        };

        return service;

        ///////////////////////////////////////////////

        /**
         * @name get
         * @desc Provides Products for the Site
         * @returns {Object} Data for Products
         * @memberOf Factories.Products
         */
        function get() {
            var data;

            data = [
                {
                    developer: 'Bethesda Game Studios',
                    genre: 'General',
                    photo: 'fallout.jpg',
                    rating: 'M',
                    score: 88,
                    uscore: 5.9,
                    summary: 'As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours. Only you can rebuild and determine the fate of the Wasteland. Welcome home.',
                    title: 'Fallout 4'
                },
                {
                    developer: '343 Industries',
                    genre: 'Action',
                    photo: 'halo_5.jpg',
                    rating: 'T',
                    score: 84,
                    uscore: 6.6,
                    summary: 'Peace has been devastated as colony worlds are unexpectedly attacked. What\'s more, when humanity\'s greatest hero goes missing, a new Spartan is assigned the task of hunting the Master Chief and solving a mystery that threatens the whole of the galaxy.',
                    title: 'Halo 5: Guardians'
                },
                {
                    developer: 'Bungie Software, Bungie',
                    genre: 'Action',
                    photo: 'destiny_taken_king.jpg',
                    rating: 'T',
                    score: 90,
                    uscore: 5.0,
                    summary: 'To battle the Darkness and the Taken army, players get brand new subclasses with new supers. Warlocks now harness the power of an electric storm, Hunters carve a bow formed from gravitational void energy, and Titans summon a flaming hammer that can sear their adversaries from a range or deliver a devastating melee impact.',
                    title: 'Destiny: The Taken King'
                },
                {
                    developer: 'EA Sports',
                    genre: 'Sports',
                    photo: 'fifa_16.jpg',
                    rating: 'E',
                    score: 84,
                    uscore: 4.6,
                    summary: 'Defend together, win together. Rely on your teammates to cover gaps when you close down an attacker. New defensive AI gives players better awareness of dangerous space on the pitch relative to the ball and their opponent. Your teammates will track back to stop sophisticated attacking runs, and close down angles of attack.',
                    title: 'FIFA 16'
                },
                {
                    developer: 'Rockstar North',
                    genre: 'Action Adventure',
                    photo: 'grand_theft_auto_5.jpg',
                    rating: 'M',
                    score: 97,
                    uscore: 7.8,
                    summary: 'Grand Theft Auto 5 melds storytelling and gameplay in unique ways as players repeatedly jump in and out of the lives of the game\'s three protagonists, playing all sides of the game\'s interwoven story.',
                    title: 'Grand Theft Auto V'
                },
                {
                    developer: 'CD Projekt Red Studio',
                    genre: 'Role-Playing',
                    photo: 'the_witcher_3_wild_hunt.jpg',
                    rating: 'M',
                    score: 91,
                    uscore: 8.8,
                    summary: 'With the Empire attacking the Kingdoms of the North and the Wild Hunt, a cavalcade of ghastly riders, breathing down your neck, the only way to survive is to fight back. As Geralt of Rivia, a master swordsman and monster hunter, leave none of your enemies standing. Explore a gigantic open world, slay beasts and decide the fates of whole communities with your actions, all in a genuine next generation format. ',
                    title: 'The Witcher 3: Wild Hunt'
                }
            ];

            return $q.when(data);
        }

    }

})();
