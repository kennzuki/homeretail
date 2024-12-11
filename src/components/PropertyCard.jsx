import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Bed, Mail } from 'lucide-react';

const PropertyCard = () => {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold mb-2">{data.title}</CardTitle>
            <div className="flex items-center text-gray-600 gap-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{data.location}</span>
            </div>
          </div>
          <Badge variant="secondary" className="text-lg font-semibold">
            ${data.price}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Bed className="w-5 h-5 text-gray-500" />
            <span>{data.bedrooms} {parseInt(data.bedrooms) === 1 ? 'Bedroom' : 'Bedrooms'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-gray-500" />
            <span>{data.houseType}</span>
          </div>
        </div>

        <div className="text-gray-600">
          <p className="line-clamp-3">{data.description}</p>
        </div>

        <div className="pt-4 border-t flex items-center gap-2 text-sm text-gray-500">
          <Mail className="w-4 h-4" />
          <span>{data.email}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;