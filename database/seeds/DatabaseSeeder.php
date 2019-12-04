<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $date = Carbon::now()->toDateTimeString();
        DB::table('admins')->insert([
            'firstname' => 'Super',
            'lastname' => 'Admin',
            'contactnumber' => '(049) 503 0579',
            'address' => 'Mahabang Parang, Brgy. San Francisco Calihan, San Pablo City, 4000 Laguna',
            'email' => 'admin@auravel.com',
            'username' => 'admin',
            'accounttype' => 'Super Admin',
            'status' => 'Active',
            'password' => bcrypt('administrator'),
            'created_at' => $date,
            'updated_at' => $date,
        ]);
    }
}
