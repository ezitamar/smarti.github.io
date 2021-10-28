<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Computer;
Use Log;


class ComputerController extends Controller
{
    //
    public function getAll(){
        $data = Computer::get();
       
       return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['Manufacturer'] = $request['Manufacturer'];
        $data['model'] = $request['model'];
        $data['size'] = $request['size'];
        $data['Processor'] = $request['Processor'];
        $data['Memory'] = $request['Memory'];
        Computer::create($data);
        return response()->json([
            'message' => "Successfully Computer created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Computer::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Computer::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['Manufacturer'] = $request['Manufacturer'];
        $data['model'] = $request['model'];
        $data['size'] = $request['size'];
        $data['Processor'] = $request['Processor'];
        $data['Memory'] = $request['Memory'];
        Computer::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
