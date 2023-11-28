'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
        {
          name:'Kempagouda International Airport',
          cityId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Mysuru International Airport',
          cityId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Mangalore International Airport',
          cityId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Rajiv Gandhi International Airport',
          cityId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Chatrapathi shivaji International Airport',
          cityId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Indera Gandhi International Airport',
          cityId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name:'Madras International Meenambakkam Airport',
          cityId: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        }
   ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
